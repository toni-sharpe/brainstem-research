import copy
import math
import numpy as np
import simplejson as json

from flask_cors import CORS
from read_data import convert_to_json, dict_to_array

ALL_RIGIDITY_BLOCKS = { 
   '0': 0,  '5': 0, '10': 0, '15': 0,
  '20': 0, '25': 0, '30': 0, '35': 0,
  '40': 0, '45': 0, '50': 0, '55': 0,
  '60': 0
}

DEFAULT_DICT = { 
   '0': [],  '5': [], '10': [], '15': [],
  '20': [], '25': [], '30': [], '35': [],
  '40': [], '45': [], '50': [], '55': [],
  '60': [],
  'fatalAve': 0,
  'nonFatalAve': 0,
  'aveDiff': 0,
  'hue': 0,
}

LIST_REDUCTION_FACTOR = 0.50

MASSIVE = True

def first_prime_symptom_blocks (first_prime_symptom):
  if (first_prime_symptom > 60):
    return '60'
  if (first_prime_symptom > 55):
    return '55'
  if (first_prime_symptom > 50):
    return '50'
  if (first_prime_symptom > 45):
    return '45'
  if (first_prime_symptom > 40):
    return '40'
  if (first_prime_symptom > 35):
    return '35'
  if (first_prime_symptom > 30):
    return '30'
  if (first_prime_symptom > 25):
    return '25'
  if (first_prime_symptom > 20):
    return '20'
  if (first_prime_symptom > 15):
    return '15'
  if (first_prime_symptom > 10):
    return '10'
  if (first_prime_symptom > 5):
    return '5'
  return '0'

def format_outcome(r):
  outcome = ''
  if r[0] == 'FAT':
    outcome = 'fatal'
  if r[0] == 'NFT':
    outcome = 'nonFatal'
  return outcome

def serialize_sets(obj):
  if isinstance(obj, set):
      return list(obj)

  return obj


def map_prime_symptom_pair(prime_symptom):
  return [prime_symptom['outcome'], prime_symptom['first_prime_symptom']]

def process_bias(prime_symptom_cases, fatal_cases):
  # for 50 times
  final_result = []
  if MASSIVE == False:
    final_result = list(range(10000))
  else:
    final_result = list(range(10000))

  x = 0
  final_result_len = len(final_result)

  while(x < final_result_len):
    prime_symptom_pair = np.array(dict_to_array(prime_symptom_cases))
    prsypt_len = prime_symptom_pair.size
    random_augment = 0 - (5.5 * np.random.rand()) + (11 * np.random.rand())
    reduced_size = math.ceil(prsypt_len * LIST_REDUCTION_FACTOR + random_augment)
    np.random.shuffle(prime_symptom_pair)
    reduced_prime_symptom_pair = np.resize(prime_symptom_pair, reduced_size)

    full_array = list(map(map_prime_symptom_pair, reduced_prime_symptom_pair))

    data_dict = dict()
    data_dict = copy.deepcopy(DEFAULT_DICT)

    fatal_array = []
    non_fatal_array = []

    for pathological_event in full_array:
      outcome = format_outcome(pathological_event)
      first_prime_symptom = pathological_event[1]

      prime_symptom_block = first_prime_symptom_blocks(first_prime_symptom)
      data_dict[prime_symptom_block].append([outcome, first_prime_symptom])

      if outcome == 'fatal':
        fatal_array.append(first_prime_symptom)
      if outcome == 'nonFatal':
        non_fatal_array.append(first_prime_symptom)

    data_dict['fatalAve'] = np.median(fatal_array)
    data_dict['nonFatalAve'] = np.median(non_fatal_array)
    data_dict['aveDiff'] = data_dict['nonFatalAve'] - data_dict['fatalAve']
    if data_dict['aveDiff'] < 0:
      data_dict['hue'] = 220 + data_dict['aveDiff'] * 6
    else:
      data_dict['hue'] = 20 + data_dict['aveDiff']

    final_result[x] = data_dict['hue']

    x = x + 1

  result_to_return = dict()
  result_to_return['prime_symptom_cases'] = prime_symptom_cases
  result_to_return['biased_test_cases'] = final_result
  result_to_return['scatter_cases'] = fatal_cases

  return json.dumps(result_to_return, default=serialize_sets)


