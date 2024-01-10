create or replace function calc_intro_symptom_duration(
  intro_symptom_start int,
  intro_symptom_end int
) returns numeric as $func$
begin
  return calc_duration(
    intro_symptom_start,
    intro_symptom_end
  );
end;
$func$ language plpgsql;
