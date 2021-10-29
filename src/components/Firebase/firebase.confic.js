import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.init";

const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;