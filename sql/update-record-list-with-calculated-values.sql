create or replace function calc_after_add() returns numeric as $$
declare
  pe record;
  this_intro_symptom_duration int := 0;
begin
  for pe in
    select
      intro_symptom_start,
      intro_symptom_end,
	  pathological_event_id
    from
      pathological_event pe
  loop
    select 
	  calc_intro_symptom_duration(
        pe.intro_symptom_start,
        pe.intro_symptom_end
      ) 
	into
	  this_intro_symptom_duration;
	  
	update
	  pathological_event
    set
	  intro_symptom_duration = this_intro_symptom_duration
    where
      pathological_event_id = pe.pathological_event_id;
  end loop;
  return this_intro_symptom_duration;
end;
$$ language plpgsql;
