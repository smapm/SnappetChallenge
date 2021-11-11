# START APPLICATION

git clone https://github.com/smapm/SnappetChallenge.git

navigate to root directory
then do the following:

  npm i
  
  npm start

# WHAT DOES THIS APP DO

This application serves as a dashboard for teachers to view details about a class

On the MONITOR page there is a dropdown where teacher can select a date

Details like

* The students present on that day
* The subjects tought on that day
* The Learning Objectives of that day
* The Domains which are part of the learning appears on the screen

There is a RESULTS Page as well!!

Here teacher has to select a student ID.

A graph which shows the correct and incorrect answers count by the student appears for that day ( Subject wise )

# LIBRARIES UESED

This app is created using React.
I haven't used create-react-app to setup this project.
Student data is fetched from https://run.mocky.io/v3/d652edfd-e4d2-4d4a-9322-ccd3fcac85ae

--- bundling tool ---
Webpack

--- compiler ---
babel

--- component creation and routing ---
react
react-router

--- state management ---
redux
redux-thunk

--- pops validation ---
prop-types

--- Dropdown, Table and Chart ---
Material UI

--- Date Manipulation ---
luxon

--- icons ---
react-icons

--- css preprocessor ---
sass

--- unit test ---
jest
enzyme 

# IMPROVEMENTS

I think these can be improved

Create webpack config files for deployment
create a seperate module to handle api calls
Increase unit test coverage
Improve accessibility
