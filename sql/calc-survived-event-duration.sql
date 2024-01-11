create or replace function calc_survived_event_duration(pe record) returns numeric as $func$
begin
  return
    coalesce_to_zero(pe.pathogenesis_duration)
    +
    coalesce_to_zero(pe.recovery_duration);
end;
$func$ language plpgsql;

