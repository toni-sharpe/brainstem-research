create or replace function update_severity() returns numeric as $$
declare
  care_equipment_1_severity int := 0;
  care_technique_1_severity int := 0;
  care_technique_2_severity int := 0;
  care_technique_3_severity int := 0;
  event_number_addition int := 0;
  first_prime_symptom_severity numeric := 0.0;
  incidental_bad numeric := 0.0;
  incidental_good numeric := 0.0;
  mild_symptom_1_duration_severity numeric := 0.0;
  pathogenesis_duration_severity numeric := 0.0;
  pe record;
  previous_events int := 0;
  previous_pathological_severity numeric := 0.0;
  prime_symptom_3_duration_severity numeric := 0.0;
  prime_symptom_duration_and_complete_severity numeric := 0.0;
  prime_symptom_duration_severity numeric := 0.0;
  prime_symptom_level_adjuster numeric := 1.0;
  recovery_duration_severity numeric := 0.0;
  severity numeric := 0;
  
begin
  update pathological_event set pathological_severity = 0;
  for pe in
    select 
      care_equipment_1,
      care_equipment_2,
      care_equipment_3,
      care_technique_1,
      care_technique_2,
      care_technique_3,
      care_technique_4,
      care_technique_6,
      care_technique_7,
      etiology,
      event_number,
      first_prime_symptom,
      mild_symptom_1,
      mild_symptom_1_duration,
      pathogenesis_duration,
      pathological_event_duration,
      pathological_event_id,
      prime_symptom_any,
      prime_symptom_3_duration,
      prime_symptom_duration,
      prime_symptom_level,
      recovery_duration
    from
      pathological_event pe
  loop
    --
    -- care technique 1
    --   high numbers for this care technique represent very bad mistakes and
    --   also significant extra danger for the patient
    --
    case
      when pe.care_technique_1 > 14 then care_technique_1_severity := 16;
      when pe.care_technique_1 > 11 then care_technique_1_severity := 13;
      when pe.care_technique_1 >  8 then care_technique_1_severity := 10;
      when pe.care_technique_1 >  5 then care_technique_1_severity :=  7;
      when pe.care_technique_1 >  2 then care_technique_1_severity :=  5;
      when pe.care_technique_1 >  0 then care_technique_1_severity :=  3;
      else care_technique_1_severity := 0;
    end case;


    --
    -- recovery duration time
    --   this has a high impact on the patient, but they don't control it
    --   the carer therefore gets higher scores
    --
    recovery_duration_severity := 0;
    case
      when pe.recovery_duration > 69 then recovery_duration_severity := 9.5;
      when pe.recovery_duration > 49 then recovery_duration_severity := 7.7;
      when pe.recovery_duration > 30 then recovery_duration_severity := 5.9;
      when pe.recovery_duration > 22 then recovery_duration_severity := 4.4;
      when pe.recovery_duration > 15 then recovery_duration_severity := 3;
      when pe.recovery_duration > 10 then recovery_duration_severity := 1.9;
      when pe.recovery_duration >  8 then recovery_duration_severity := 1.2;
      when pe.recovery_duration >  6 then recovery_duration_severity := 0.6;
      when pe.recovery_duration >  4 then recovery_duration_severity := 0.2;
    else recovery_duration_severity := -2;
    end case;


    --
    -- duration based severity calculations
    --   durations are multiplied by factors to reflect the overall impact
    --   durations for more significant or severe symptoms have higher multipliers
    --   the earliest prime symptom from 1 and 2 is used
    --
    pathogenesis_duration_severity := 0;
    mild_symptom_1_duration_severity := 0;
    prime_symptom_3_duration_severity := 0;
    prime_symptom_duration_severity := 0;
    prime_symptom_duration_and_complete_severity := 0;

    -- severe levels of prime symptom are used to emphasise the time based severity
    -- calculations, some exponentiality is added for more severe cases
    if
      pe.prime_symptom_level > 2
    then
      prime_symptom_level_adjuster := 1
      +
      (
        pe.prime_symptom_level::float
        /
        10
      );
    end if;

    -- severities calculated
    pathogenesis_duration_severity :=
      coalesce(pe.pathological_event_duration, 0)
      *
      0.1;

    mild_symptom_1_duration_severity :=
      coalesce(pe.mild_symptom_1_duration, 0)
      *
      0.2;

    prime_symptom_3_duration_severity :=
      coalesce(pe.prime_symptom_3_duration, 0)
      *
      0.4;

    prime_symptom_duration_severity :=
      coalesce(pe.prime_symptom_duration, 0)
      *
      0.15
      *
      prime_symptom_level_adjuster;

    prime_symptom_duration_and_complete_severity :=
      (
        coalesce(pe.prime_symptom_duration, 0)
        -
        coalesce(pe.recovery_duration, 0)
      )
      *
      0.7
      *
      prime_symptom_level_adjuster;

      -- can't be less than 0
      if prime_symptom_duration_and_complete_severity < 0 then
        prime_symptom_duration_and_complete_severity := 0;
      end if;


    --
    -- first prime symptom (of 1 and 2)
    -- earlier is worse
    --
    case
      when pe.first_prime_symptom <  2 then first_prime_symptom_severity := 40;
      when pe.first_prime_symptom <  4 then first_prime_symptom_severity := 35;
      when pe.first_prime_symptom <  6 then first_prime_symptom_severity := 30;
      when pe.first_prime_symptom <  8 then first_prime_symptom_severity := 25;
      when pe.first_prime_symptom < 11 then first_prime_symptom_severity := 20;
      when pe.first_prime_symptom < 14 then first_prime_symptom_severity := 15;
      when pe.first_prime_symptom < 15 then first_prime_symptom_severity := 10;
      when pe.first_prime_symptom < 16 then first_prime_symptom_severity :=  8.5;
      when pe.first_prime_symptom < 17 then first_prime_symptom_severity :=  7;
      when pe.first_prime_symptom < 18 then first_prime_symptom_severity :=  5;
      when pe.first_prime_symptom < 20 then first_prime_symptom_severity :=  4;
      when pe.first_prime_symptom < 23 then first_prime_symptom_severity :=  3;
      when pe.first_prime_symptom < 28 then first_prime_symptom_severity :=  2;
      when pe.first_prime_symptom < 50 then first_prime_symptom_severity :=  1;
      else first_prime_symptom_severity := 0;
      end case;

    if
      first_prime_symptom_severity > 0
    then
      first_prime_symptom_severity :=
      (
        first_prime_symptom_severity
        +
        coalesce(pe.event_number, 0)
      )
      *
      prime_symptom_level_adjuster;
    end if;


    --
    -- incidental good
    --
    incidental_good := 0;

    if
      pe.care_technique_3 = 'LPV'
    then
      incidental_good := incidental_good
      +
      1;
    end if;

    if
      pe.care_equipment_2 = true
    then
      incidental_good := incidental_good
      +
      3;
    end if;


    --
    -- incidental bad
    --
    incidental_bad := 0;

    if
      pe.care_technique_3 = 'NTS'
    then
      incidental_bad := incidental_bad
      +
      2;
    end if;

    if
      pe.prime_symptom_any = true
    then
      incidental_bad := incidental_bad
      +
      2;
    end if;

    if
      pe.mild_symptom_1 > pe.first_prime_symptom
    then
      incidental_bad := incidental_bad
      +
      1;
    end if;

    if
      pe.care_technique_7 = true
    then
      incidental_bad := incidental_bad
      +
      1;
    end if;

    if
      pe.care_technique_6 = true
    then
      incidental_bad := incidental_bad
      +
      2;
    end if;

    if
      pe.care_equipment_3 = false
      and
      pe.recovery_duration > 2
    then
      incidental_bad := incidental_bad
      +
      5;
    end if;

    if
      pe.care_technique_4 = false
    then
      incidental_bad := incidental_bad
      +
      5;
    end if;


    --
    -- care technique 2
    --
    care_technique_2_severity :=0;
    case
      when
        pe.care_technique_2 = 'CMP'
        or
        pe.care_technique_2 = 'CHD'
        or
        pe.care_technique_2 = 'CTP'
      then
        care_technique_2_severity := 2;
      when
        pe.care_technique_2 = 'TIP'
      then
        care_technique_2_severity := 1.5;
      when
        pe.care_technique_2 = 'FFT'
        or
        pe.care_technique_2 = 'KNE'
      then
        care_technique_2_severity := 0.75;
      when
        pe.care_technique_2 = 'SIT'
        or
        pe.care_technique_2 = 'STD'
      then
        care_technique_2_severity := -0.5;
      else care_technique_2_severity := 0;
    end case;


    --
    -- care equipment 1
    --
    care_equipment_1_severity :=0;
    case
      when
        pe.care_equipment_1 = 'THH'
        or
        pe.care_equipment_1 = 'THO'
        or
        pe.care_equipment_1 = 'HIH'
        or
        pe.care_equipment_1 = 'HIC'
        or
        pe.care_equipment_1 = 'ELC'
      then
        care_equipment_1_severity := 5;
      when
        pe.care_equipment_1 = 'INH'
        or
        pe.care_equipment_1 = 'INO'
        or
        pe.care_equipment_1 = 'SCT'
      then
        care_equipment_1_severity := 2;
      when
        pe.care_equipment_1 = 'STR'
        or
        pe.care_equipment_1 = 'SCW'
      then
        care_equipment_1_severity := -1;
      else care_equipment_1_severity := 0;
    end case;


    --
    -- care technique 3
    --
    care_technique_3_severity :=0;
    case
      when pe.care_technique_3 = 'TID' then care_technique_3_severity := 10;
      when pe.care_technique_3 = 'KNR' then care_technique_3_severity :=  7;
      when pe.care_technique_3 = 'RPH' then care_technique_3_severity :=  2;
      when pe.care_technique_3 = 'WIN' then care_technique_3_severity :=  1;
      else care_technique_3_severity := 0;
    end case;


    --
    -- multiple events are factored in
    --
    previous_pathological_severity :=0;
    previous_events = coalesce(pe.event_number, 0);
    if
      previous_events > 1
    then
      previous_pathological_severity =
        previous_events
        *
        0.5;
    end if;


    --
    -- calculate and update
    --
    severity =
      care_technique_1_severity
      +
      recovery_duration_severity
      +
      pathogenesis_duration_severity
      +
      mild_symptom_1_duration_severity
      +
      prime_symptom_3_duration_severity
      +
      prime_symptom_duration_and_complete_severity
      +
      prime_symptom_duration_severity
      -
      incidental_good
      +
      incidental_bad
      +
      care_technique_2_severity
      +
      care_equipment_1_severity
      +
      care_technique_3_severity
      +
      previous_pathological_severity;

      update
        pathological_event
      set
        pathological_severity = severity
      where
        pathological_event_id = pe.pathological_event_id;

    end loop;
  return severity;
end;
$$ language plpgsql;
