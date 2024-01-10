create or replace function calc_intro_symptom_duration(
  intro_symptom_start int,
  intro_symptom_end int
) returns numeric as $func$
begin
  if
    intro_symptom_start is not null
    and
    intro_symptom_end is not null
  then
    return intro_symptom_start + intro_symptom_end;
  end if;
  
  return 0;
end;
$func$ language plpgsql;
