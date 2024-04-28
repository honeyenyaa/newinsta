import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBMnQvj3qi0Qh8r_S2YbZPcjjjkGUmMUf8",
	authDomain: "myinsta-dc0d9.firebaseapp.com",
	projectId: "myinsta-dc0d9",
	storageBucket: "myinsta-dc0d9.appspot.com",
	messagingSenderId: "107103914453",
	appId: "1:107103914453:web:061a70e063fdd1e726555c",
	measurementId: "G-7PQJYH4L5E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
