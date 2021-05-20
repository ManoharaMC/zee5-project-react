import firebase from 'firebase';



//?Authentication
import "firebase/auth";
//?realtime database => just like mongodb
import "firebase/database";

//?storage 
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB-Lre3eF1woPzKMBH-CTc2-bBDI29NFx8",
    authDomain: "zee5-clone-cd32a.firebaseapp.com",
    projectId: "zee5-clone-cd32a",
    storageBucket: "zee5-clone-cd32a.appspot.com",
    messagingSenderId: "1077737439284",
    appId: "1:1077737439284:web:c28989b1fef1bed8740a61"
  };

  //? initialize firebase and communicate with react app
  firebase.initializeApp(firebaseConfig);

  export default firebase;