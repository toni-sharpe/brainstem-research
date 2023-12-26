# The Project

This project is essentially a statistical analysis of some medical research that I have done during my period without proper work. The research itself commprises of a hypothesis and a wealth of supporting evidence including 289 cases. The cases, or "events" as I call them, each have about 70 data points and this site is intended to graphically display certain supporting evidence, provide methods of challenging that and exploring how wrong I can be (bias is real) and also, give the user the chance to interact themselves, either to challenge the data or to explore it themselves.

The medical research is real and involves brainstem injury. The events are real and each one represents the experience of a real person, many of whom, around 90, are now dead as a result. For this reason the site is purposefully genericised for the sake of the dignity of both the dead and living and because as of yet, my hypothesis has not been verified or even inspected by anyone who has the right credentials. A good analogue however is covid-19, one can imagine that is the pathology being examined and find their way around fairly successfully.

It's pretty complicated stuff, grouped bar graphs, scatters, time lines, medians, quantiles, etc. so dive in, it's a visual experience, even if stats aren't your thing.

# To run

Based on Flask, PostGres and Create React App, but you can actually just run the React, given data gathering is paused, the current data has been taken from the endpoints and hard-coded, bypassing Python and PostGres. You can load the DB data into a DB and query that independently also if you wish or fiddle with `gui/api-calls/BaseApiCall` file to look through Python to PostGres for the full experience.

My instructions aren't perfect yet so apologies for that, I know that is frustrating, but I need to understand a couple of "fresh environment" bugs which are what will hit people first time round (and of course, I have forgotten). I have a ticket in my project for this, but if you happen to know and wish to tell me/contribute, please do so.

* Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress
* Flask: https://flask.palletsprojects.com/en/3.0.x/installation/
* Node (18): (see NVM)
* NVM: https://nodejs.org/en/download/package-manager
* Pip: https://pip.pypa.io/en/stable/getting-started/
* Python (3)

```
// Python backend
// This will need the DB too, so can be skipped
$ python3 --version
-> 3.9.6
$ python3 -m pip --version
-> pip 21.2.4
$ export FLASK_APP=index.py
$ export FLASK_ENV=development

// Node
$ nvm use node
-> Now using node v18.14.0 (npm v9.3.1)

// that's good

cd server
flask run\

// React frontend
cd gui
npm install
npm run start

// Storybook (req. Node 18)
cd gui
npm run storybook

// Tests
cd gui
npm run test
```

# DB

You can run the DB too - the site doesn't connect with that right now, in order to get a build live I used copied data (data gathering is on hold) and bypassed the Python and PostGreSQL. Look at gui/src/api-calls/BaseApiCall.js to move this code about and hook up to the DB.
Note, the largest test data DB (21000 records) has some bugs associated with it.

```
sql/020.do.create-pathological-event-table.sql
sql/full-data-set.sql
sql/run-pgsql.sql
```

# Cypress

Cypress can be used too, there is no deviation from the standard install, find out more here: https://docs.cypress.io/guides/getting-started/installing-cypress

Tests are run individually with a click. 

# Preview

## Site

### Some anti-bias tools to start, although the first does show a crucial correlation for the hypothesis

<img width="1680" alt="antibias--correlation-german" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/1b306529-eed6-46c6-b6f4-67c65ee8865c">
<img width="1680" alt="antibias--prime-symtpom" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/6aa51dc9-6892-4c03-ac5a-3745e49a00c8">



### And then interactive tools, histogram builder and time bar analysis

![histogram--showing-detailed-bars](https://github.com/toni-sharpe/brainstem-research/assets/10499070/c873a84b-e4c6-4d5f-88f6-4ce9686b9603)
![time-line-stat-chart--shows-interaction](https://github.com/toni-sharpe/brainstem-research/assets/10499070/a26cf471-c81b-4bb7-9939-dcbdf71c88c6)



### And finally just a couple of general pages related to the work

![time-line-bar-chart](https://github.com/toni-sharpe/brainstem-research/assets/10499070/435a9255-a1b9-4f09-bc90-2504f685fd78)

<img width="1680" alt="prime-symptom--mid" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/d6b4c60e-9a19-4ec4-922d-02bc55489b3f">

## Storybook

### Let's have the colourful example, complete with accessibility tool used to refine the components and avoid problems

<img width="1520" alt="storybook-1" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/5e13e7b5-41c5-48f3-bae1-ebf75bd02aa4">

<img width="1476" alt="storybook-4" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/ce5e91f9-ed3c-473b-9ca6-87f35fea9ba8">

<img width="1476" alt="storybook-3--no-data" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/0e0e89af-1c76-446d-8a7c-a741c8f89bf4">

## Cypress and tests

### One Cypress run

<img width="1641" alt="e2e-cypress--histogram-maker-real-data" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/38c5237d-7c4f-4102-911d-14b4ea869a38">

### One Testing run
<img width="733" alt="full-green-tests" src="https://github.com/toni-sharpe/brainstem-research/assets/10499070/7c290c93-0aae-4a1c-ac2c-4c2400807e4f">


