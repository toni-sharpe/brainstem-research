create or replace function null_fatals(pe record) returns bool as $func$
begin
  return
    pe.fatal_symptom_1 is null
    and
    pe.fatal_symptom_2 is null;
end;
$func$ language plpgsql;
