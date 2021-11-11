# START APPLICATION

npm i
npm start

# LIBRARIES UESED

This app is created using React.
I haven't used create-react-app to setup this project.
Student data is fetched from https://run.mocky.io/v3/d652edfd-e4d2-4d4a-9322-ccd3fcac85ae

--- bundling tool ---
Webpack

--- compiler ---
babel

--- component creation and routing ---
"react": "^16.14.0",
"react-dom": "^16.14.0",
"react-icons": "^4.3.1",
"react-redux": "^7.2.6",
"react-router": "^5.2.1",
"react-router-dom": "^5.3.0",

--- state management ---
"redux": "^4.1.2",
"redux-thunk": "^2.4.0"

--- pops validation ---
"prop-types": "^15.7.2",

--- Dropdown, Table and Chart ---
Material UI

--- Date Manipulation ---
"luxon": "^2.1.1",

--- icons ---
react-icons

--- css preprocessor ---
sass

# WHAT DOES THIS APP DO

This application serves as a dashboard for teachers to view details about a class

There is a dropdown where teacher can select a date

Details like

* The students present on that day
* The subjects tought on that day
* The Learning Objectives of that day
* The Domains which are part of the learning appears on the screen

There is a Results Page as well!!

Here teacher has to select a student ID
A graph which shows the correct and incorrect answers count by the student appears for that day ( Subject wise ) 


