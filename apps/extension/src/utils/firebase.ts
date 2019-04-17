import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // make sure you add this for firestore

let initialized = false;

const config = {
  // TODO setup automated inject of firebase config
};

export const initializeFirebase = () => {
  if (!initialized) {
    firebase.initializeApp(config);
    firebase.firestore().settings({ timestampsInSnapshots: true });
    initialized = true;
  }
};

export const loginViaGitHub = async () => {
  console.log('logging in via github');
  const provider = new firebase.auth.GithubAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  console.log(result);
};
