import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
// upload github
// const firebaseConfig = {
//   apiKey: myApiKeyOnFirebase,
//   authDomain: myAuthDomainOnFirebase,
//   databaseURL: myDatabaseURLOnFirebase,
//   projectId: myProjectIdOnFirebase,
//   storageBucket: myStorageBucketOnFirebase,
//   messagingSenderId: myMessagingSenderIdOnFirebase,
//   appId: myApiIdOnFirebase,
//   measurementId: myMeasurementIdOnFirebase
// };
const firebaseConfig = {
  apiKey: "AIzaSyABH5-GDDk5ZYCe-Lf1Tg71I0DLmON1yE0",
  authDomain: "octopuswaterfall.firebaseapp.com",
  databaseURL: "https://octopuswaterfall.firebaseio.com",
  projectId: "octopuswaterfall",
  storageBucket: "octopuswaterfall.appspot.com",
  messagingSenderId: "591836866723",
  appId: "1:591836866723:web:dd138f08ca3d7c00153716",
  measurementId: "G-Q03838NTMJ"
};
firebase.initializeApp(firebaseConfig)
// initialize firestore
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase