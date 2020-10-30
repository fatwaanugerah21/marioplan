import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyDWz3xh5HGGqnvloxqzaRaLVTEySK15zu0",
   authDomain: "learn-marioplan-ef69a.firebaseapp.com",
   databaseURL: "https://learn-marioplan-ef69a.firebaseio.com",
   projectId: "learn-marioplan-ef69a",
   storageBucket: "learn-marioplan-ef69a.appspot.com",
   messagingSenderId: "1008850152304",
   appId: "1:1008850152304:web:05db6a3965dc993ee87db5",
   measurementId: "G-FNJRBD97RZ"
};
const fbConfig = firebase;
fbConfig.initializeApp(firebaseConfig);
fbConfig.firestore();

export default fbConfig;