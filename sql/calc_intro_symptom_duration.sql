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

-- generated always as (
--     case
--       when
--         intro_symptom_start is not null
--         and
--         intro_symptom_end is not null
--       then
--         intro_symptom_start + intro_symptom_end
--       when
--         intro_symptom_start is not null
--         and (
--           pathogenesis_duration is not null
--           or
--           recovery_duration is not null
--         )
--       then
--         intro_symptom_start
--         -
--         coalesce (
--           greatest (
--             pathogenesis_duration,
--             recovery_duration
--           ),
--           0
--         )
--       else
--         null
--     end
--   ) stored
