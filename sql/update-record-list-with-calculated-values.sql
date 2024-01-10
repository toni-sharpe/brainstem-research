create or replace function calc_after_add() returns numeric as $$
declare
  pe record;
  this_intro_symptom_duration int := 0;
  this_mild_symptom_1_duration int := 0;
begin
  --
  -- retrieve all records
  --
  -- 1) in a system with active data addition this would check for nulls so it would only
  --   run on new records, and probably be trigger controlled not to mention, there'd be a
  --   case for "calculate on add"
  -- 2) in my case, the SQL is just re-run and the data-set is small, so I omitted that and,
  --   I could have kept "calculate on add" but the file wa becoming unwieldy with a lot of
  --   cut and paste duplication
  --
  for pe in
    select
      pathological_event_id,
      intro_symptom_end,
      intro_symptom_start,
      mild_symptom_1,
      mild_symptom_1_1_end,
      fatal_symptom_1,
      fatal_symptom_2,
      mild_symptom_1_2,
      mild_symptom_2,
      outcome,
      pathogenesis_duration,
      prime_symptom_1,
      prime_symptom_2,
      prime_symptom_3,
      recovery_duration
    from
      pathological_event pe
  loop
    --
    -- intro symptom duration
    --
    select
      calc_intro_symptom_duration(
        pe.intro_symptom_start,
        pe.intro_symptom_end
      )
    into
      this_intro_symptom_duration;

    --
    -- mild symptom 1 duration
    --
    select
      calc_mild_symptom_1_duration(pe)
    into
      this_mild_symptom_1_duration;

  update
    pathological_event
  set
    intro_symptom_duration = this_intro_symptom_duration,
    mild_symptom_1_duration = this_mild_symptom_1_duration
  where
    pathological_event_id = pe.pathological_event_id;

  end loop;
  return this_intro_symptom_duration;
end;
$$ language plpgsql;
