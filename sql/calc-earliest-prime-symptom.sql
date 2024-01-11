create or replace function calc_earliest_prime_symptom(pe record) returns numeric as $func$
begin
  if
    prime_symptom_occured(pe)
  then
    return least (
      pe.prime_symptom_1,
      pe.prime_symptom_2,
      pe.prime_symptom_3
    );
  end if;

  return null;
end;
$func$ language plpgsql;
