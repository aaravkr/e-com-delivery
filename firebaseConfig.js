var firebaseAdmin = require('firebase-admin');

var serviceAccount = require('./e-commerce-3a3b1-firebase-adminsdk-5yzun-5c75c09a53.json');

   var fireAdmin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL:"https://e-commerce-3a3b1.firebaseio.com"
});

var database = fireAdmin.firestore();

module.exports = database;