from flask import Flask
from flask_cors import CORS
import psycopg2
import psycopg2.extras
import simplejson as json

from read_data import convert_to_json, read_all_data, read_fatal_data, read_prime_symptom_data, read_non_fatal_data

from anti_bias import process_bias
from prime_symptom_pair import process_prime_symptom_pair
from all_cases import process_all_cases

conn = psycopg2.connect(
    host="localhost",
    database="pathology",
    user="postgres",
    password="admin")

cur = conn.cursor(cursor_factory = psycopg2.extras.RealDictCursor)

all_cases = read_all_data(cur)
fatal_cases = read_fatal_data(cur)
non_fatal_cases = read_non_fatal_data(cur)
prime_symptom_cases = read_prime_symptom_data(cur)
antibias_fatal_cases = read_fatal_data(cur, remove_fir = True)
antibias_prime_symptom_cases = read_prime_symptom_data(cur, remove_fir = True)
biased_test_cases = read_prime_symptom_data(cur)

conn.commit()
conn.close()

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  return "Hello world!"

@app.route("/Scatter")
def scatter():
  return process_all_cases(all_cases)

@app.route("/PrimeSymptomList")
def prime_symptom_pair():
  return process_prime_symptom_pair(prime_symptom_cases)

@app.route("/AntiBiasToolKit")
def bias():
  return process_bias(antibias_prime_symptom_cases, fatal_cases)

@app.route("/Gantt")
def statistics():
  return process_all_cases(all_cases)

@app.route("/TimeLine")
def timeLine():
  return process_all_cases(all_cases)

@app.route("/HistogramMaker")
def histogramMaker():
  return process_all_cases(all_cases)

@app.route("/SVG")
def svg():
  return process_all_cases(all_cases)

