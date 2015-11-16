## getting started

### install
Mac command: curl https://install.meteor.com/ | sh
Windows installer: https://www.meteor.com/install

### een app maken 
in console ->

meteor create app-naam
cd app-naam
meteor

meteor maakt ook automatisch een localhost aan
http://localhost:3000

je hoeft ook niet meer te refreshen als je iets aanpast
meteor doet dat zelf


### meteor packages
https://atmospherejs.com/


### folder structure voorbeeld poll

folder structure kan je zelf bepalen, meteor weet waar welke files zitten
hier is een voorbeeld van een goede folder structure

 .meteor
| client/                       // all the code for our client and browser
    |----- components/          // we'll be creating components for our application parts
      |--- poll-form.css
      |--- poll-form.html
      |--- poll-form.js
      |--- poll.css
      |--- poll.html
      |--- poll.js
    |----- app.body.html        // layout for our entire app
    |----- app.head.html        // document head for entire app
    |----- app.js                   // the overall js for our layout
    |----- app.css                   // the overall css for our layout
| collections/              // here we'll store our mongo models
    |----- polls.js         // defining our mongo collection
| server/                       // code for our server
    |----- bootstrap.js // adding sample data on app startup


### server vs client
if (Meteor.isClient) {
    // code here will only be run on the client
}

if (Meteor.isServer) {
    // code here will only be run on the server
}