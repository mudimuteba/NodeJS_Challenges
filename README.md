# Task 1 : Http server (http, get, serve static files)

-A node server with express within nodeApp folder that serves a Javascript memory-game on port 8080 to https://localhost:8080


# Task 2: Request handling (basic routing, post, form, middleware)

- Serves a form on https://localhost:8000/form
- Upon submission the form collects all data and submits them to a screen within a JSON format.


# Task 3: HTML template engine (Javascript templates, fetch, api)

- A single page website which provide weather to visitors.
- The site url is served by entering the following url: localhost:8880/weather.


# Task 4: A registration restful API ( API end-point,routing, MongoDB, database schema)

- back-end service helps capture basic informations about prospective student who come to inquire here at Umuzi.

- Captured information includes the following:
	1.Visitor’s 
	2.Name, surname and age
	3.date, time and subject of inquiry
	4.the name of the person who assisted the visitor

- The back-end service provides the following end points:
	1./addNewProspect (add a new prospect)
	2./deleteProspectById (delete a single prospect)
	3./deleteAllProspects (delete all prospects)
	4./viewAllProspects (view all prospects)
	5./viewProspectById (view a single prospect)
	6./updateProspectById (Update a single prospect)

	You run access these exact endpoints via Postman using the following request collection: https://www.getpostman.com/collections/876a80d3b935c452b061

- The service uses the Mongodb database and the Mongoose schema.


## Getting Started
- 'git clone https://github.com/mudimuteba/NodeJS_Challenges'
- 'cd into Task#...' folder
- install dependencies 'npm install'
- 'npm start'

### Prerequisites
- node
- npm (node package manager)
- mongodb
- postman
