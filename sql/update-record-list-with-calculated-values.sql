create or replace function calc_after_add() returns numeric as $$
declare
  pe record;
  first_prime_time int :=0;
  first_pair_prime_time int :=0;
  greatest_value int :=0;
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
      recovery_duration,
      time_of_death
    from
      pathological_event pe
  loop
    first_prime_time = calc_earliest_prime_symptom(pe);
    first_pair_prime_time = calc_earliest_prime_symptom_from_pair(pe);
    greatest_value = calc_greatest(pe);

    update
      pathological_event
    set
      intro_symptom_duration = calc_intro_symptom_duration(
        pe.intro_symptom_start,
        pe.intro_symptom_end
      ),
      mild_symptom_1_duration = calc_mild_symptom_1_duration(pe),
      mild_symptom_2_duration = calc_duration(pe.mild_symptom_2, greatest_value),
      prime_symptom_1_duration = calc_duration(pe.prime_symptom_1, greatest_value),
      prime_symptom_2_duration = calc_duration(pe.prime_symptom_2, greatest_value),
      prime_symptom_3_duration = calc_duration(pe.prime_symptom_3, greatest_value),
      first_prime_symptom = first_prime_time,
      first_prime_symptom_type = calc_earliest_prime_symptom_type(pe, first_prime_time),
      prime_symptom_any = prime_symptom_occured(pe),
      full_prime_symptom_duration = calc_duration(first_prime_time, greatest_value),
      prime_symptom_duration = calc_duration(first_pair_prime_time, greatest_value),
      prime_symptom_proportion = first_prime_time::float / greatest_value::float,
      recovery_proportion = pe.recovery_duration::float / calc_survived_event_duration(pe)::float,
      pathological_event_duration = calc_duration(0, greatest_value),
      event_record_is_complete = calc_event_record_is_complete(pe)
    where
      pathological_event_id = pe.pathological_event_id;
  end loop;
  return null;
end;
$$ language plpgsql;
