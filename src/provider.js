//import * as firebase from 'firebase';
const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAyq4TVMZjyF0K6mbS0nxV88CvRVP5Ps_Y",
    authDomain: "penta-interview.firebaseapp.com",
    databaseURL: "https://penta-interview.firebaseio.com",
    projectId: "penta-interview",
    storageBucket: "penta-interview.appspot.com",
    messagingSenderId: "874705362785",
    appId: "1:874705362785:web:b2fae578d8f22763"
  };

firebase.initializeApp(config);

//export const database = firebase.database().ref();

module.exports ={
   database: firebase.database().ref()
}