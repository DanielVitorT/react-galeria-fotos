import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUth-Jgv9n8VoXE52-4k_SEEj6RTXO3EY",
  authDomain: "galeria-de-fotos-e2d16.firebaseapp.com",
  projectId: "galeria-de-fotos-e2d16",
  storageBucket: "galeria-de-fotos-e2d16.appspot.com",
  messagingSenderId: "286703548525",
  appId: "1:286703548525:web:5cee9a55c8497530aca764"
};

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp); 
