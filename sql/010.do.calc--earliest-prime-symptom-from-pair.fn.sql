create or replace function calc_earliest_prime_symptom_from_pair(pe record) returns numeric as $func$
begin
  if
    pe.prime_symptom_1 is not null
    or
    pe.prime_symptom_2 is not null
  then
    return least (
      pe.prime_symptom_1,
      pe.prime_symptom_2
    );
  end if;

  return null;
end;
$func$ language plpgsql;
