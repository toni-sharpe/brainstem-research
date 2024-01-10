create or replace function calc_duration(
  symptom_start int,
  symptom_end int
) returns numeric as $func$
begin
  if
    symptom_start is not null
    and
    symptom_end is not null
  then
    return symptom_end - symptom_start;
  end if;

  return null;
end;
$func$ language plpgsql;
