create or replace function update_management() returns numeric as $$
declare
  care_equipment_1_severity int := 0;
  consultant_doctor_variation_count int := 0;
  care_technique_1_severity int := 0;
  care_technique_2_severity numeric := 0.0;
  care_technique_3_severity int := 0;
  equip_combo record;
  fatals record;
  incidental_bad numeric := 0.0;
  incidental_good numeric := 0.0;
  longer_than_severity numeric := 0.0;
  pe record;
  prime_symptom_duration_severity numeric := 0.0;
  prime_symptom_level_adjuster numeric := 1.0;
  prime_symptom_proportion_severity numeric := 0.0;
  recovery_duration_severity numeric := 0.0;
  recovery_proportion_severity numeric := 0.0;
  severity numeric := 10;
begin
  update pathological_event set care_error_level = 0;
  for pe in
    select 
      care_equipment_1,
      care_equipment_2,
      care_equipment_3,
      care_technique_1,
      care_technique_2,
      care_technique_3,
      care_technique_4,
      care_technique_5,
      care_technique_6,
      care_technique_7,
      consultant_doctor,
      etiology,
      event_record_is_complete,
      pathogenesis_duration,
      pathological_event_duration,
      pathological_event_id,
      patient_id,
      prime_symptom_duration,
      prime_symptom_level,
      prime_symptom_proportion,
      recovery_duration,
      recovery_proportion
    from
      pathological_event pe
    where
      outcome = 'NSV'
  loop
    --
    -- care technique 1
    --   high numbers for this care technique represent very bad mistakes and
    --   also significant extra danger for the patient
    --
    case
      when pe.care_technique_1 > 17 then care_technique_1_severity := 25;
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
    --   high times here suggest the care level was poor to negligent or
    --   other problems such as overwork
    --
    case
      when pe.recovery_duration > 69 then recovery_duration_severity := 12;
      when pe.recovery_duration > 49 then recovery_duration_severity :=  9.5;
      when pe.recovery_duration > 30 then recovery_duration_severity :=  7;
      when pe.recovery_duration > 22 then recovery_duration_severity :=  5;
      when pe.recovery_duration > 15 then recovery_duration_severity :=  3;
      when pe.recovery_duration > 10 then recovery_duration_severity :=  1.5;
      when pe.recovery_duration >  8 then recovery_duration_severity :=  0.9;
      when pe.recovery_duration >  6 then recovery_duration_severity :=  0.5;
      when pe.recovery_duration >  4 then recovery_duration_severity :=  0.2;
      else recovery_duration_severity := -2;
    end case;


    --
    -- recovery proportion (low better)
    --   a long pathogenesis followed by a quick recovery suggests good care
    --   the opposite suggests poor or negligence, though it's much more likely
    --   to see long pathogeneisis and recovery, suggesting slightly poorer
    --   care
    --
    case
      when pe.recovery_proportion >= 90 then recovery_proportion_severity := 15;
      when pe.recovery_proportion >= 80 then recovery_proportion_severity := 10;
      when pe.recovery_proportion >= 70 then recovery_proportion_severity :=  8;
      when pe.recovery_proportion >= 60 then recovery_proportion_severity :=  6;
      when pe.recovery_proportion >= 50 then recovery_proportion_severity :=  5;
      when pe.recovery_proportion >= 40 then recovery_proportion_severity :=  4;
      when pe.recovery_proportion >= 30 then recovery_proportion_severity :=  3;
      when pe.recovery_proportion >= 20 then recovery_proportion_severity :=  2;
      when pe.recovery_proportion >= 10 then recovery_proportion_severity :=  1;
      else
        recovery_proportion_severity := 0;
    end case;


    --
    -- prime symptom duration
    --

    -- first the severity needs to be factored in - more severe, more noiticable,
    --   therefore that needs to be factored in to the overall score
    if
      pe.prime_symptom_level > 2
    then
      prime_symptom_level_adjuster := 1
      +
      (
        pe.prime_symptom_level::float
        /
        8
      );
    end if;

    -- then the duration, to be used with the level adjuster
    -- the first big jump is intended to reflect noticing/reaction time - allowing
    --   it to happen is not bad, so the scale starts at 2, but how the reaction
    --   goes is critical
    -- the second jump reflects where this has been noticed and ignored suggesting
    --   a jump from low negligence, such as noticing and reacting immediately but
    --   slowly to noticing and not reacting at all
    --
    case
      when pe.prime_symptom_duration > 40 then prime_symptom_duration_severity := 30;
      when pe.prime_symptom_duration > 35 then prime_symptom_duration_severity := 28;
      when pe.prime_symptom_duration > 30 then prime_symptom_duration_severity := 26;
      when pe.prime_symptom_duration > 25 then prime_symptom_duration_severity := 25;
      when pe.prime_symptom_duration > 21 then prime_symptom_duration_severity := 24;
      when pe.prime_symptom_duration > 18 then prime_symptom_duration_severity := 23;
      when pe.prime_symptom_duration > 15 then prime_symptom_duration_severity := 22;
      when pe.prime_symptom_duration > 10 then prime_symptom_duration_severity := 16;
      when pe.prime_symptom_duration >  7 then prime_symptom_duration_severity := 13;
      when pe.prime_symptom_duration >  4 then prime_symptom_duration_severity :=  6;
      when pe.prime_symptom_duration >  2 then prime_symptom_duration_severity :=  4;
      when pe.prime_symptom_duration >  1 then prime_symptom_duration_severity :=  2;
      else
        prime_symptom_duration_severity := 0;
    end case;


    --
    -- prime symptom proportion (low better)
    --   the numbers here are kept lower to avoid prime symptom from having too much
    --   influence, but a patient who spends most of their time displaying prime symptoms
    --   is reflecting some negligence that is subtly different to the reaction time
    -- using >= as these are %
    --
    case
      when pe.prime_symptom_proportion >= 90 then prime_symptom_proportion_severity := 14;
      when pe.prime_symptom_proportion >= 80 then prime_symptom_proportion_severity := 11.5;
      when pe.prime_symptom_proportion >= 70 then prime_symptom_proportion_severity :=  9.5;
      when pe.prime_symptom_proportion >= 60 then prime_symptom_proportion_severity :=  8;
      when pe.prime_symptom_proportion >= 50 then prime_symptom_proportion_severity :=  6.5;
      when pe.prime_symptom_proportion >= 40 then prime_symptom_proportion_severity :=  5;
      when pe.prime_symptom_proportion >= 30 then prime_symptom_proportion_severity :=  4;
      when pe.prime_symptom_proportion >= 20 then prime_symptom_proportion_severity :=  3;
      when pe.prime_symptom_proportion >= 10 then prime_symptom_proportion_severity :=  2;
      when pe.prime_symptom_proportion >=  0 then prime_symptom_proportion_severity :=  1;
      else
        prime_symptom_proportion_severity := 0;
    end case;


    --
    -- incidental good
    --
    incidental_good := 0;

    if
      pe.care_technique_4 = true
    then
      incidental_good := incidental_good
      +
       3;
    end if;

    if
      pe.care_technique_5 = true
    then
      incidental_good := incidental_good
      +
       3;
    end if;

    if
      pe.care_equipment_2 = true
    then
      incidental_good := incidental_good
      +
      10;
    end if;

    if
      pe.care_equipment_3 = true
    then
      incidental_good := incidental_good
      +
      10;
    end if;

    if
      pe.care_technique_6 = false
      and
      pe.care_technique_7 = false
    then
      incidental_good := incidental_good
      +
       7;
    end if;


    --
    -- incidental bad
    --
    incidental_bad := 0;

    if
      pe.etiology = 'PID'
    then
      incidental_bad := incidental_bad
      +
       5;
    end if;

    if
      pe.care_technique_6 = true
    then
      incidental_bad := incidental_bad
      +
      10;
    end if;

    if
      pe.event_record_is_complete = false
    then
      incidental_bad := incidental_bad
      +
       5;
    end if;

    if
      pe.care_equipment_3 = false
      and
      pe.recovery_duration > 4
    then
      incidental_bad := incidental_bad
      +
      15;
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
        care_technique_2_severity := 3;
      when
        pe.care_technique_2 = 'TIP'
      then
        care_technique_2_severity := 2;
      when
        pe.care_technique_2 = 'FFT'
        or
        pe.care_technique_2 = 'KNE'
      then
        care_technique_2_severity := 1.5;
      when
        pe.care_technique_2 = 'SIT'
        or
        pe.care_technique_2 = 'STD'
      then
        care_technique_2_severity := 1;
      else
        care_technique_2_severity := 0;
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
      else
        care_equipment_1_severity := 0;
    end case;


    --
    -- care equipment 4 variety
    -- this just updates a value for now
    -- ineffiecient, should be it's own, but there's only 202 records
    --
    consultant_doctor_variation_count := 0;
    for equip_combo in
      select distinct
        care_equipment_4,
        care_technique_1,
        care_technique_2,
        care_technique_3
      from
        pathological_event
      where
        consultant_doctor = pe.consultant_doctor
    loop
      consultant_doctor_variation_count := consultant_doctor_variation_count
      +
      1;
    end loop;

    update
      pathological_event
    set
      consultant_doctor_variation = consultant_doctor_variation_count
    where
      pathological_event_id = pe.pathological_event_id;


    --
    -- care technique 3
    --
    care_technique_3_severity :=0;
    case
      when
        pe.care_technique_3 = 'TID'
      then
        care_technique_3_severity := 10;
      when
        pe.care_technique_3 = 'KNR'
      then
        care_technique_3_severity := 7;
      when
        pe.care_technique_3 = 'RPH'
      then
        care_technique_3_severity := 2;
      when
        pe.care_technique_3 = 'NWI'
      then
        care_technique_3_severity := 1;
      else
        care_technique_3_severity := 0;
    end case;


    --
    -- non fatal longer than fatal
    --
    longer_than_severity := 0;
    select into fatals
      count(*) as shorter_than_count
    from
      pathological_event
    where
      outcome = 'SEV'
    and
      pathological_event_duration < pe.pathological_event_duration;

    longer_than_severity = fatals.shorter_than_count * 0.5;


    --
    -- final calculation
    --
    severity =
      care_technique_1_severity
      +
      recovery_duration_severity
      +
      recovery_proportion_severity
      +
      (
        prime_symptom_duration_severity
        *
        prime_symptom_level_adjuster
      )
      +
      prime_symptom_proportion_severity
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
      longer_than_severity;


    --
    -- and update the record
    --
    update
      pathological_event
    set
      care_error_level = severity
    where
      pathological_event_id = pe.pathological_event_id;

  end loop;
  return severity;
end;
$$ language plpgsql;
