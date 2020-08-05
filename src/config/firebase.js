import firebase from "firebase";

import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_GAPI_ID,
  databaseURL: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FB_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FB_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

export { firestore };
