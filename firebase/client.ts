// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDNN_CB5iubgKAIFTxXbYW-9Z5hzN_Xkog",
    authDomain: "aspira-c97d1.firebaseapp.com",
    projectId: "aspira-c97d1",
    storageBucket: "aspira-c97d1.firebasestorage.app",
    messagingSenderId: "157326234719",
    appId: "1:157326234719:web:59d95dc262137f946cb7ea",
    measurementId: "G-S94X85JCBL"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);