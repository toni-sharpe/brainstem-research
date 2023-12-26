from flask_cors import CORS

from read_data import convert_to_json

def process_prime_symptom_pair(prime_symptom_cases):
  return convert_to_json(prime_symptom_cases)
