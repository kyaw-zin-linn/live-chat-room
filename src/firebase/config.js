import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5d74xAM_KOH6nzEAViUJ6eATdib25FYY",
    authDomain: "vue-blog-system-b6a85.firebaseapp.com",
    projectId: "vue-blog-system-b6a85",
    storageBucket: "vue-blog-system-b6a85.appspot.com",
    messagingSenderId: "788999519691",
    appId: "1:788999519691:web:e3b635311d065fc6e04a4e"
  };

  firebase.initializeApp(firebaseConfig);

  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,auth,timestamp};