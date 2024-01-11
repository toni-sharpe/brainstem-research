create or replace function calc_event_record_is_complete(pe record) returns bool as $func$
begin
  if
    pe.outcome = 'FAT'
    and
    pe.fatal_symptom_1 is null
    and
    pe.fatal_symptom_2 is null
    and
    pe.time_of_death is null
  then
    return false;
  end if;

  if
    pe.recovery_duration is null
  then
    return false;
  end if;

  return true;
end;
$func$ language plpgsql;