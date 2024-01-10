create or replace function coalesce_to_zero(timing int) returns int as $func$
begin
  return coalesce (
    timing,
    0
  );
end;
$func$ language plpgsql;
