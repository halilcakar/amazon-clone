import app from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyBSZBQjRvgHl3DrYRe4DOMbVS9sCW0FrY8',
  authDomain: 'challange-23489.firebaseapp.com',
  databaseURL: 'https://challange-23489.firebaseio.com',
  projectId: 'challange-23489',
  storageBucket: 'challange-23489.appspot.com',
  messagingSenderId: '427170106037',
  appId: '1:427170106037:web:6b3725569f55121be00cfc',
};

const firebase = app.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
