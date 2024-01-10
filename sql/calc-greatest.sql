create or replace function calc_greatest(pe record) returns numeric as $func$
declare
  pathological_event_duration int :=0;
begin
  if
    pe.outcome = 'NFT'
    or
    pe.outcome = 'UNK'
  then
    pathological_event_duration =
      coalesce_to_zero(pe.pathogenesis_duration)
      +
      coalesce_to_zero(pe.recovery_duration);

    return greatest (
      pe.mild_symptom_1,
      pe.mild_symptom_2,
      pe.prime_symptom_1,
      pe.prime_symptom_2,
      pe.prime_symptom_3,
      pathological_event_duration
    );
  end if;

  if
    pe.outcome = 'FAT'
  then
    if
      null_fatals(pe)
    then
      return null;
    end if;

    return greatest (
      pe.fatal_symptom_1,
      pe.fatal_symptom_2
    );
  end if;

  return null;
end;
$func$ language plpgsql;
