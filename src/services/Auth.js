import { auth } from "./../firebase";

/*const INVALID_EMAIL = "auth/invalid-email";
const USER_DISABLED = "auth/user-disabled";
const USER_NOT_FOUND = "auth/user-not-found";
const WRONG_PASSWORD = "auth/wrong-password";
const EMAIL_IN_USE = "auth/email-already-in-use";
const WEAK_PASSWORD = "auth/weak-password";*/

/**
 * Use to authenticate users via email
 * @param {String} email User email
 * @param {String} password User password
 */
export const signInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
        return Promise.resolve(user);
    }, (rejected) => {
        return Promise.reject(rejected);
        /* Use in the validation
        switch (rejected.code) {
            case INVALID_EMAIL:
                return ("La direccion de email no es valida");
            case USER_DISABLED:
                return ("Esta cuenta ha sido bloqueada");
            case USER_NOT_FOUND:
                return ("No existe un usuario registrado con este correo");
            case WRONG_PASSWORD:
                return ("Contraseña incorrecta");        
            default:
                return ("Error al autenticar");
        }*/
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}

/**
 * Use to create a new account based in email
 * @param {String} email New user email
 * @param {String} password New user password
 */
export const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
        return user;
    }, (rejected) => {
        return Promise.reject(rejected);
        /* Use in the validation
        switch (rejected.code) {
            case INVALID_EMAIL:
                return ("La direccion de email no es valida");
            case EMAIL_IN_USE:
                return ("Ya existe una cuenta con este correo");
            case WEAK_PASSWORD:
                return ("La contraseña debe contener al menos 6 caracteres");
            default:
                return ("Error al crear la cuenta");
        }*/
    })
    .catch((error) => {
        return Promise.reject(error);
    });
}

/**
 * Use to close the current sesion
 */
export const signOut = () => {
    return auth.signOut()
    .then(() => {
        return Promise.resolve();
    }, (rejected) => {
        return Promise.reject(rejected);
    })
    .catch((error) => {
        console.log(error);
        return Promise.reject(error);
    });
}