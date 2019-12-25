import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: myApiKeyOnFirebase,
  authDomain: myAuthDomainOnFirebase,
  databaseURL: myDatabaseURLOnFirebase,
  projectId: myProjectIdOnFirebase,
  storageBucket: myStorageBucketOnFirebase,
  messagingSenderId: myMessagingSenderIdOnFirebase,
  appId: myApiIdOnFirebase,
  measurementId: myMeasurementIdOnFirebase
};
firebase.initializeApp(firebaseConfig)
// initialize firestore
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase