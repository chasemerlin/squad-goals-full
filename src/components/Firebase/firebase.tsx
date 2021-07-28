/*
* Ionic React Capacitor Full App (https://store.enappd.com/product/ionic-react-full-app-capacitor/)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  serverValue: typeof app.database.ServerValue;
  emailAuthProvider: typeof app.auth.EmailAuthProvider;
  auth: any;
  db: app.database.Database;
  authUser: any;

  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();



  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email: any, password: any) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: any, password: any) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: any) => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = (password: any) =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next: any, fallback: any) =>
    this.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };
            this.authUser = authUser;
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = (uid: any) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Message API ***

  message = (uid: any) => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');

  // *** FireStore Crud Functions


  addData = async (table: any, data: any) => {
    const ref = firebase.firestore().collection(table);
    await ref.add(data)
  }
  editData = async (table: any, data: any, key: any) => {
    const updateRef = firebase.firestore().collection(table).doc(key);
    await updateRef.set(data)
  }
  deleteData = async (table: any, key: any) => {
    await firebase.firestore().collection(table).doc(key).delete()
  }
  getData = async (table: any) => {
    return new Promise((resolve, reject) => {
      try {
        const ref = firebase.firestore().collection(table);
        const boards: Array<Object> = [];
        ref.onSnapshot(querySnapshot => querySnapshot.forEach(doc => {
          const { ...props } = doc.data();
          boards.push({
            key: doc.id,
            doc,
            ...props
          });
          resolve(boards);
        }));
      }
      catch (e) {
        reject(e)
      }
    })
  }
  filterData(table: string, column: string, value: any) {
    return new Promise((resolve, reject) => {
      try {
        const boards: Array<Object> = [];
        const ref = firebase.firestore().collection(table).where(column, "==", value);
        ref.onSnapshot(querySnapshot => querySnapshot.forEach(doc => {
          const { ...props } = doc.data();
          boards.push({
            key: doc.id,
            doc,
            ...props
          });
          resolve(boards);
        }));
      }
      catch (e) {
        reject(e)
      }
    })
  }
}


export default Firebase;
