# Setup Instructions

- Create a new folder to hold the mongodb database data
	e.g. "mkdir ~/Desktop/mudi-data"

- Set the database path to the folder you just created
	command: sudo mongod --dbpath ~/Desktop/mudi-data

- Run mongodb
	command: mongo

# Testing the routes/endpoints
- Open Postman and click on Import
- Import From Link
- Paste this request collection link: https://www.getpostman.com/collections/876a80d3b935c452b061
- Click on "Collections in the sidebar"
- Select the requests you'd like to test