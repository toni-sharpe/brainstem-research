create or replace function update_overall_patient_rating() returns numeric as $$
declare
  pe record;
  care_error_level_factor numeric(10,9) := 0.0;
  pathological_severity_factor numeric(10,9) := 0.0;
  overall_rating numeric := 0.00;
  rating_ranges record;
  management_weight int := 60;
  severity_weight int := 40;
begin
  --
  -- reset
  --
  update
    pathological_event
  set
    overall_patient_rating = 0;
  
  --
  -- retrieve ranges for individual calculations relative to ranges
  --
  select 
      max(pathological_severity) - min(pathological_severity) as pathological_severity_range,
      max(care_error_level) - min(care_error_level) as care_error_level_range
    from
      pathological_event
    where
      outcome = 'NFT'
  into
    rating_ranges;  
    
  --
  -- now set the overall value in a loop
  --
  for pe in
    select 
      care_error_level,
      pathological_severity,
      pathological_event_id,
      outcome
    from
      pathological_event pe
  loop
    --
    -- non-fatals involve care level
    --
    if
      pe.outcome = 'NFT'
    then
      -- care level relative to range
      care_error_level_factor :=
        pe.care_error_level
        /
        rating_ranges.care_error_level_range;

      -- severity of event relatoive to range
      pathological_severity_factor :=
        pe.pathological_severity
        /
        rating_ranges.pathological_severity_range;

      -- overall rating using weights
      overall_rating :=
      (
        pathological_severity_factor
        *
        severity_weight
      )
      +
      (
        care_error_level_factor
        *
        management_weight
      );
    end if;

    --
    -- fatals are simpler, just the severity itself for them, no weighting
    --
    if
      pe.outcome = 'FAT'
    then
      overall_rating := pe.pathological_severity;
    end if;

    -- finish with the update
    update
      pathological_event
    set
      overall_patient_rating = overall_rating
    where
      pathological_event_id = pe.pathological_event_id;

  end loop;
  return overall_rating;
end;
$$ language plpgsql;
