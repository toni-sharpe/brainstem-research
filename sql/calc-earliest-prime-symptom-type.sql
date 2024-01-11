create or replace function calc_earliest_prime_symptom_type(pe record, first_prime_time int) returns text as $func$
begin
  if
    first_prime_time = null
  then
    return null;
  end if;

  if
    pe.prime_symptom_1 = first_prime_time
  then
    return 'DCB';
  end if;

  if
    pe.prime_symptom_2 = first_prime_time
  then
    return 'DCT';
  end if;

  if
    pe.prime_symptom_3 = first_prime_time
  then
    return 'ABD';
  end if;

  return null;
end;
$func$ language plpgsql;
