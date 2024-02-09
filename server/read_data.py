from flask_cors import CORS
import simplejson as json

REMOVE_FIR = False

def dict_to_array(data_dict):
  return [dict(dd) for dd in data_dict]

def convert_to_json(query_data):
  return json.dumps(dict_to_array(query_data), default=str)

def and_remove_fir(remove_fir = REMOVE_FIR):
  if remove_fir == False:
    return ""
  if remove_fir == True:
    return f"""
      AND
      consultant_doctor != 'FIR'
    """

def read_all_data(cur):
  cur.execute(f"""
    SELECT 
      *
    FROM 
      pathological_event
  """)

  allData = cur.fetchall()

  return allData

def read_non_fatal_data(cur):
  cur.execute(f"""
    SELECT
      *
    FROM
      pathological_event
    WHERE
      outcome='NSV'
    ORDER BY
      pathological_event_date asc
  """)

  all_nft_data = cur.fetchall()

  return all_nft_data

def read_fatal_data(cur, remove_fir = False):
  cur.execute(f"""
    SELECT 
      fatal_symptom_2,
      prime_symptom_3,
      prime_symptom_3_duration,
      mild_symptom_1,
      mild_symptom_2,
      prime_symptom_1,
      prime_symptom_2,
      first_prime_symptom,
      first_prime_symptom_type,
      event_count
      consultant_doctor,
      death_response_1,
      recovery_duration,
      fatal_symptom_1,
      pathogenesis_duration,
      outlier,
      prime_symptom_level,
      slight_death_response_1,
      slight_death_response_2,
      pathological_event_duration,
      prime_symptom_duration,
      death_response_2,
      mild_symptom_1_duration
    FROM 
      pathological_event
    WHERE 
      pathological_event.outcome='SEV'
      {and_remove_fir(remove_fir)}
  """)

  fatal = cur.fetchall()

  return fatal

def read_prime_symptom_data(cur, remove_fir = False):
  cur.execute(f"""
    SELECT 
      outcome,
      first_prime_symptom,
      outlier,
      pathological_event_duration,
      first_prime_symptom_type,
      consultant_doctor,
      prime_symptom_level,
      event_count,
      fatal_symptom_1,
      fatal_symptom_2,
      mild_symptom_1_duration,
      mild_symptom_1_2,
      mild_symptom_2,
      prime_symptom_1,
      prime_symptom_2,
      prime_symptom_3
    FROM 
      pathological_event
    WHERE
      first_prime_symptom IS NOT NULL
      {and_remove_fir(remove_fir)}
    ORDER BY
      pathological_event_id
  """)

  prime_symptom_pair = cur.fetchall()

  return prime_symptom_pair
