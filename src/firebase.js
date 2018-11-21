import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyAHuoh0odC38fIKtKawHJZNSKnoEpY_Q_8",
    authDomain: "coup-manager.firebaseapp.com",
    databaseURL: "https://coup-manager.firebaseio.com",
    projectId: "coup-manager",
    storageBucket: "coup-manager.appspot.com",
    messagingSenderId: "41994965103"
};

firebase.initializeApp(config);

export const db = firebase.database();

export const storage = firebase.storage();

export const auth = firebase.auth();

export default firebase;