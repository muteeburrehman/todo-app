import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6cuGkGRKKYfh3XINmoOR2_akHhw_BsEo",
    authDomain: "git-firebase-f1306.firebaseapp.com",
    projectId: "git-firebase-f1306",
    storageBucket: "git-firebase-f1306.appspot.com",
    messagingSenderId: "722067411265",
    appId: "1:722067411265:web:a0fa802dee004774ef51c0"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth (app)
export {auth}
