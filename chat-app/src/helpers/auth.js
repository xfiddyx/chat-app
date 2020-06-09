import { auth } from '../services/firebase';

const SignUp = (email, password) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

const SignIn = (email, password) => {
  return auth().signInWithEmailAndPassword(email, password);
};

const LogOut = () => {
  return auth().signOut();
};

export { SignUp, SignIn, LogOut };
