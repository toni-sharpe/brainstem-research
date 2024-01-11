drop table pathological_event;

create table if not exists pathological_event (
  id serial primary key,
  pathological_event_id int unique,
  care_site varchar(3),
  pathological_source_ref_id varchar(50),
  consultant_doctor varchar(3),
  consultant_doctor_variation int,
  outcome varchar(3) not NULL,
  outcome_type varchar(3) not NULL,
  source_country varchar(2),
  commissioner_initials varchar(3),
  presented_gender varchar(1),
  patient_weight int,
  outlier boolean,
  pathological_event_date date,
  etiology varchar(3),

  care_equipment_1 varchar(3),
  care_equipment_2 boolean default false,
  care_equipment_3 boolean default false,
  care_equipment_4 varchar(3),
  care_equipment_5 varchar(3),
  care_equipment_6 varchar(3),
  care_equipment_7 varchar(3),

  care_technique_1 int,
  care_technique_2 varchar(3),
  care_technique_3 varchar(3),
  care_technique_4 boolean default false,
  care_technique_5 boolean default false,
  care_technique_6 boolean default false,
  care_technique_7 boolean default false,

  observed_movement_response_1 boolean default false,
  observed_movement_response_2 boolean default false,

  event_record_length int default null,

  intro_symptom_start int default null,
  intro_symptom_end int default null,
  intro_symptom_duration int null,

  mild_symptom_1 int default null,
  mild_symptom_1_1_end int default null,
  mild_symptom_1_2 int default null,
  mild_symptom_1_duration int null,
  mild_symptom_2 int default null,
  mild_symptom_2_duration int default null,

  prime_symptom_1 int default null,
  prime_symptom_1_duration int default null,
  prime_symptom_2 int default null,
  prime_symptom_2_duration int default null,
  first_prime_symptom int default null,
  first_prime_symptom_type varchar(3) default null,
  prime_symptom_duration int default null,
  full_prime_symptom_duration int default null,
  prime_symptom_any boolean default false,
  prime_symptom_level int default 2,
  prime_symptom_3 int default null,
  prime_symptom_3_duration int default null,

  fatal_symptom_1 int default null,
  fatal_symptom_2 int default null,
  slight_death_response_1 int default null,
  death_response_1 int default null,
  slight_death_response_2 int default null,
  death_response_2 int default null,

  time_of_death int default null,

  pathogenesis_duration int,
  recovery_duration int,
  recovery_proportion numeric(6, 4) default null,
  prime_symptom_proportion numeric(6, 4) default null,
  pathological_event_duration int default null,

  event_record_is_complete boolean default false,

  pathological_severity numeric(4, 1) default 0.0,
  care_error_level numeric(4, 1) default 0.0,
  overall_patient_rating numeric (5, 2) default 0.00,

  patient_id int not null,
  event_number int not null,
  event_title varchar(24),
  notes text,
  unique(
    patient_id,
    event_number
  )
);

comment on column
  pathological_event.care_site
  is
    'Where the event took place primarily';
comment on column
  pathological_event.outlier
  is
    'Used to mark that this event needs closer examination, it might not be robust enough for inclusion';
comment on column
  pathological_event.etiology
  is
    'The source of the pathological event';
comment on column
  pathological_event.intro_symptom_start
  is
    'To record some possibly related symnptom seen in many cases';
comment on column
  pathological_event.prime_symptom_any
  is
    'Specifically important to the NDA investigation';
comment on column
  pathological_event.prime_symptom_3_duration
  is
    'Specifically important to the NDA investigation';
comment on column
  pathological_event.slight_death_response_1
  is
    'For recording slight examples, room to explore events which maybe are not fatal but come close';
comment on column
  pathological_event.slight_death_response_2
  is
    'For recording slight examples, room to explore events which maybe are not fatal but come close';
comment on column
  pathological_event.pathogenesis_duration
  is
    'Length of time spent ill, not recovering';
comment on column
  pathological_event.recovery_proportion
  is
    'Proprortion of the overall time, both pathogenesis and recovery, spent in recovery ';
comment on column
  pathological_event.pathological_event_duration
  is
    'The entirety from 100% fine, to 100% or dead';
comment on column
  pathological_event.event_record_is_complete
  is
    'In some cases data is cut off at some point, this is calculated from the available data';
