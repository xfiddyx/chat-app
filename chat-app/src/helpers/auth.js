import { auth, db } from '../services/firebase';

const SignUp = (email, password, username) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      db.collection('users').doc(data.user.uid).set({ username, email });
    });
};

const SignIn = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => db.collection('users').doc(data.user.uid).get())
    .then((doc) => console.log(doc.data()));
};

const LogOut = () => {
  return auth().signOut();
};

export { SignUp, SignIn, LogOut };
