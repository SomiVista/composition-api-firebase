import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBlGUnJPdo4R4rjP7pPnydimbLcR3tZ_Tk",
    authDomain: "composition-api-firebase.firebaseapp.com",
    projectId: "composition-api-firebase",
    storageBucket: "composition-api-firebase.appspot.com",
    messagingSenderId: "120466273141",
    appId: "1:120466273141:web:030bb0aaa70f68f66fd93c",
    measurementId: "G-KC2JKGHQ43"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export {
    db
}