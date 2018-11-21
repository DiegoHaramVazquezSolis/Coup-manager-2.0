import { 
    signInWithEmailAndPassword,
    signOut, 
    createUserWithEmailAndPassword
} from './../../services/Auth';
import { usersRef } from '../../services/Database';
import { auth } from '../../firebase';
import { getTeam } from './teamActions';

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

function userSignInSuccess(data) {
    localStorage.setItem('user', JSON.stringify(data.email));
    return {
        type: LOGIN_SUCCESS,
        data
    };
}

function userSignOutSuccess() {
    localStorage.removeItem('user');
    return {
        type: LOGOUT_SUCCESS
    };
}

/**
 * Use to authenticate user and load their data
 * @param {String} email Email of user
 * @param {String} password Password of user
 */
export const signInWithEmail = (email, password) => (dispatch) => {
    signInWithEmailAndPassword(email, password)
    .then((user) => {
        return Promise.resolve(user);
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error.message);
    });
}

/**
 * Use to create an account
 * @param {String} email email of the new user
 * @param {String} password Password of the new user
 */
export const createUserWithEmail = (email, password, name, phone) => (dispatch) => {
    return createUserWithEmailAndPassword(email, password)
    .then((user) => {
        createUserData(user.user.uid, email, name, phone);
        return Promise.resolve(user);
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}

/**
 * Use when create account
 * @param {String} uid Uid of the new user
 * @param {String} name Name of the user
 * @param {Phone} phone Phone number of the user
 */
function createUserData(uid, email, name, phone) {
    usersRef.child(uid).set({uid, email, name, phone});
}

/**
 * Use to get the data of specific user
 * @param {FirebaseUser} user User object
 * @param {callback} dispatch Trigger of redux
 */
function getUserData(user, dispatch) {
    const userRef = usersRef.child(user.uid);
    userRef.on('value', (firebaseUser) => {
        if (firebaseUser.exists()) {
            dispatch(getTeam(firebaseUser.val().team || ''));
            return dispatch(userSignInSuccess(firebaseUser.val()));
        }
    });
}

/**
 * Use to listen session changes
 */
export const checkUser = () => (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if(user){
            dispatch(getUserData(user, dispatch));
        }
    })
};

export const closeSession = () => (dispatch) => {
    signOut()
    .then(() => {
        dispatch(userSignOutSuccess());
    }, (rejected) => {
        console.log(rejected);
    });
}