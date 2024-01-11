create or replace function prime_symptom_occured(pe record) returns bool as $func$
begin
  return
    pe.prime_symptom_1 is not null
    or
    pe.prime_symptom_2 is not null
    or
    pe.prime_symptom_3 is not null;
end;
$func$ language plpgsql;
