import User from '../models/User';
import auth from '@react-native-firebase/auth';

class AuthViewModel {
  signIn(email: string, password: string): void {
    const user = new User(email, password);

    if (user.validate()) {
      auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          console.log('User signed in successfully!');
          // Do something after successful sign-in
        })
        .catch((error: any) => {
          console.error('Sign-in error:', error);
          // Handle sign-in error
        });
    } else {
      console.error('Invalid user credentials');
      // Handle invalid credentials error
    }
  }

  signUp(email: string, password: string): void {
    const user = new User(email, password);

    if (user.validate()) {
      auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          console.log('User signed up successfully!');
          // Do something after successful sign-up
        })
        .catch((error: any) => {
          console.error('Sign-up error:', error);
          // Handle sign-up error
        });
    } else {
      console.error('Invalid user credentials');
      // Handle invalid credentials error
    }
  }

  signOut(): void {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
}

export default AuthViewModel;
