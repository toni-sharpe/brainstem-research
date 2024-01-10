create or replace function calc_mild_symptom_1_duration(pe record) returns numeric as $func$
declare
  greatest_value int :=0;
  mild_symptom_recovery_gap int :=0;
begin  
  if
    pe.mild_symptom_1 is null
  then
    return null;
  end if;

  greatest_value = calc_greatest(pe);

  if
    pe.mild_symptom_1_2 is not null
    and
    pe.mild_symptom_1_1_end is not null
  then
    mild_symptom_recovery_gap =
      pe.mild_symptom_1_2
      -
      pe.mild_symptom_1_1_end;
  end if;

  return nullif(
    greatest_value - pe.mild_symptom_1 - mild_symptom_recovery_gap,
    0
  );
end;
$func$ language plpgsql;
