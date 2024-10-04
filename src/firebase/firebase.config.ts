// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase with config
const firebaseConfig = {
  apiKey: 'AIzaSyDvp01tn9NWSJceEFPGVspDKCCXPtbnoXo',
  authDomain: 'meet-ease.firebaseapp.com',
  projectId: 'meet-ease',
  storageBucket: 'meet-ease.appspot.com',
  messagingSenderId: '334884180004',
  appId: '1:334884180004:web:29e2a060d51441ca3988b1',
  measurementId: 'G-HKMCTV570X',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
