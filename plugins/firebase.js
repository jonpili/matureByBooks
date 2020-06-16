import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'maturebybooks.firebaseapp.com',
    databaseURL: 'https://maturebybooks.firebaseio.com',
    projectId: 'maturebybooks',
    storageBucket: 'maturebybooks.appspot.com',
    messagingSenderId: '675398562591',
    appId: '1:675398562591:web:46262744a22ced88b1f62a'
  })
}

const db = firebase.firestore()

export default db
