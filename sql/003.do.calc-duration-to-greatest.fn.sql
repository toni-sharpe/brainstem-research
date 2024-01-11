create or replace function calc_duration_to_greatest(pe record, duration_field int) returns numeric as $func$
begin  
  if
    duration_field is null
  then
    return null;
  end if;

  return nullif(
    calc_greatest(pe) - duration_field,
    0
  );
end;
$func$ language plpgsql;
