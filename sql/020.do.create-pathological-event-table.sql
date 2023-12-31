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
  intro_symptom_duration int generated always as (
    case
      when
        intro_symptom_start is not null
        and
        intro_symptom_end is not null
      then
          intro_symptom_start + intro_symptom_end
      when
        intro_symptom_start is not null
        and (
          pathogenesis_duration is not null
          or
          recovery_duration is not null
        )
      then
        intro_symptom_start
        -
        coalesce (
          greatest (
            pathogenesis_duration,
            recovery_duration
          ),
          0
        )
      else
        null
    end
  ) stored,
  mild_symptom_1 int default null,
  mild_symptom_1_1_end int default null,
  mild_symptom_1_2 int default null,
  mild_symptom_1_duration int generated always as (
    case
      when
        mild_symptom_1 is not null
      then
        case
          when
            outcome = 'FAT'
          then
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )
            -
            mild_symptom_1
            -
            (
              coalesce (
                mild_symptom_1_2,
                0
              )
              -
              coalesce (
                mild_symptom_1_1_end,
                0
              )
            )
          when
            outcome = 'NFT'
          then
            nullif (
              coalesce (
                greatest (
                  mild_symptom_1,
                  mild_symptom_2,
                  prime_symptom_1,
                  prime_symptom_2,
                  prime_symptom_3,
                  pathogenesis_duration
                  +
                  coalesce (
                    recovery_duration,
                    0
                  )
                )
                -
                mild_symptom_1
                -
                (
                  coalesce (
                    mild_symptom_1_2,
                    0
                  )
                  -
                  coalesce (
                    mild_symptom_1_1_end,
                    0
                  )
                ),
                0
              ),
              0
            )
          else
            null
        end
      else
        null
    end
  ) stored,
  mild_symptom_2 int default null,
  mild_symptom_2_duration int generated always as (
    case
      when
        mild_symptom_2 is not null
      then
        case
          when
            outcome = 'FAT'
          then
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )
            -
            mild_symptom_2
          when
            outcome = 'NFT'
          then
            nullif (
              coalesce (
                greatest (
                  mild_symptom_1,
                  mild_symptom_2,
                  prime_symptom_1,
                  prime_symptom_2,
                  prime_symptom_3,
                  pathogenesis_duration
                  +
                  coalesce (
                    recovery_duration,
                    0
                  )
                )
                -
                mild_symptom_2,
                0
              ),
              0
            )
          else
            null
        end
      else
        null
    end
  ) stored,
  prime_symptom_1 int default null,
  prime_symptom_1_duration int generated always as (
    case
      when
        prime_symptom_1 is not null
      then
        case
          when
            outcome = 'FAT'
          then
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )
            -
            prime_symptom_1
          when
            outcome = 'NFT'
          then
            nullif (
              coalesce (
                greatest (
                  mild_symptom_1,
                  mild_symptom_2,
                  prime_symptom_1,
                  prime_symptom_2,
                  prime_symptom_3,
                  pathogenesis_duration
                  +
                  coalesce (
                    recovery_duration,
                    0
                  )
                )
                -
                prime_symptom_1,
                0
              ),
              0
            )
          else
            null
        end
      else
        null
    end
  ) stored,
  prime_symptom_2 int default null,
  prime_symptom_2_duration int generated always as (
    case
      when
        prime_symptom_2 is not null
      then
        case
          when
            outcome = 'FAT'
          then
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )
            -
            prime_symptom_2
          when
            outcome = 'NFT'
          then
            nullif (
              coalesce (
                greatest (
                  mild_symptom_1,
                  mild_symptom_2,
                  prime_symptom_1,
                  prime_symptom_2,
                  prime_symptom_3,
                  pathogenesis_duration
                  +
                  coalesce (
                    recovery_duration,
                    0
                  )
                )
                -
                prime_symptom_2,
                0
              ),
              0
            )
          else
            null
        end
      else
        null
    end
  ) stored,
  first_prime_symptom int generated always as (
    least(
      prime_symptom_1,
      prime_symptom_2
    )
  ) stored,
  first_prime_symptom_type varchar(3) generated always as (
    case
      when
        least(
          prime_symptom_1,
          prime_symptom_2
        ) >= prime_symptom_1
      then
        'DCB'
      when
        least(
          prime_symptom_1,
          prime_symptom_2
        ) >= prime_symptom_2
      then
        'DCT'
      else
        null
    end
  ) stored,
  prime_symptom_duration int generated always as (
    case
      when
        outcome = 'FAT'
      then
        greatest (
          fatal_symptom_1,
          fatal_symptom_2
        )
        -
        least (
          prime_symptom_1,
          prime_symptom_2
        )
      when
        outcome = 'NFT'
      then
        nullif (
          coalesce (
            greatest (
              mild_symptom_1,
              mild_symptom_2,
              prime_symptom_1,
              prime_symptom_2,
              prime_symptom_3,
              pathogenesis_duration
              +
              coalesce (
                recovery_duration,
                0
              )
            )
            -
            least(
              prime_symptom_1,
              prime_symptom_2
            ),
            0
          ),
          0
        )
      else
        null
    end
  ) stored,
  prime_symptom_1_2 boolean generated always as (
    case 
      when
        prime_symptom_1 is not null
        and
        prime_symptom_2 is not null
      then
        true
      else
        false
    end
  ) stored,
  prime_symptom_level int default 2,
  prime_symptom_3 int default null,
  prime_symptom_3_duration int generated always as (
    case
      when
        prime_symptom_3 is not null
      then
        case
          when
            outcome = 'FAT'
            and (
              fatal_symptom_1 is not null
              or
              fatal_symptom_2 is not null
            )
          then
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )
            -
            prime_symptom_3
          when
            outcome = 'NFT'
          then
            nullif (
              coalesce (
                greatest (
                  mild_symptom_1,
                  mild_symptom_2,
                  prime_symptom_1,
                  prime_symptom_2,
                  prime_symptom_3,
                  pathogenesis_duration
                  +
                  coalesce (
                    recovery_duration,
                    0
                  )
                )
                -
                prime_symptom_3,
                0
              ),
              0
            )
          else
            null
        end
      else
        null
    end
  ) stored,
  fatal_symptom_1 int default null,
  fatal_symptom_2 int default null,
  slight_death_response_1 int default null,
  death_response_1 int default null,
  slight_death_response_2 int default null,
  death_response_2 int default null,
  time_of_death int default null,
  pathogenesis_duration int,
  recovery_duration int,
  recovery_proportion numeric(5, 2) generated always as (
    case
      when
        pathogenesis_duration is not null
        and
        recovery_duration is not null
      then
        recovery_duration::float
        /
        (
          pathogenesis_duration::float
          +
          recovery_duration::float
        )
        *
        100.0
      else
        null
    end
  ) stored,
  prime_symptom_proportion numeric(5, 2) generated always as (
    case
      when
        outcome = 'FAT'
      then
        case
          when
            prime_symptom_1 is not null
            or
            prime_symptom_2 is not null
          then
            least(
              prime_symptom_1::float,
              prime_symptom_2::float
            )
            /
            greatest (
              fatal_symptom_1,
              fatal_symptom_2
            )::float
            *
            100.0
          else
            0.0
        end
      when
        outcome = 'NFT'
      then
        case
          when
            pathogenesis_duration is not null
          then
            coalesce (
              greatest (
                mild_symptom_1,
                mild_symptom_2,
                prime_symptom_1,
                prime_symptom_2,
                prime_symptom_3,
                pathogenesis_duration
                +
                coalesce (
                  recovery_duration,
                  0.0
                )
              )
              -
              least(
                prime_symptom_1,
                prime_symptom_2
              ),
              0.0
            )::float
            /
            (
              pathogenesis_duration
              +
              coalesce (
                recovery_duration,
                0.0
              )
            )::float
            *
            100.0
          else
            0.0
        end
      else
        0.0
    end
  ) stored,
  pathological_event_duration int generated always as (
    case
      when
        outcome = 'FAT'
      then
        greatest(
          fatal_symptom_1,
          fatal_symptom_2
        )
      when
        outcome = 'NFT'
      then
        nullif (
          coalesce (
            greatest (
              intro_symptom_end,
              mild_symptom_1,
              mild_symptom_1_2,
              mild_symptom_2,
              prime_symptom_1,
              prime_symptom_2,
              prime_symptom_3,
              pathogenesis_duration
              +
              coalesce (
                recovery_duration,
                0
              )
            ),
            0
          ),
          0
        )
      else
        null
    end
  ) stored,
  event_record_is_complete boolean generated always as (
    case
      when
        outcome = 'FAT'
        and
        fatal_symptom_1 is null
        and
        fatal_symptom_2 is null
        and
        time_of_death is null
      then
        false
      when
        outcome = 'NFT'
        and
        recovery_duration is null
      then
        false
      else
        true
    end
  ) stored,
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
  pathological_event.prime_symptom_1_2
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
