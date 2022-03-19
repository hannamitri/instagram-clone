import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEXehYnXz4inH4TCSzyIeBVtjYOH-nNVU',
  authDomain: 'instagram-clone-f2980.firebaseapp.com',
  projectId: 'instagram-clone-f2980',
  storageBucket: 'instagram-clone-f2980.appspot.com',
  messagingSenderId: '862287184363',
  appId: '1:862287184363:web:e6fbe4b5e41e7258c499ae'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
