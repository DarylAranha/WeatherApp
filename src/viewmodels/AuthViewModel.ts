import {Alert} from 'react-native';
import User from '../models/User';
import auth from '@react-native-firebase/auth';

class AuthViewModel {
  signIn(email: string, password: string, onSuccess: () => void): void {
    const user = new User(email, password);

    if (user.validate()) {
      auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          console.log('User signed in successfully!');
          onSuccess();
        })
        .catch((error: any) => {
          // Handle sign-in error
          Alert.alert('Sign-in Error', error.message);
        });
    } else {
      // Handle invalid credentials error
      Alert.alert(
        'Invalid Credentials',
        'Please enter a valid email and password.',
      );
    }
  }

  signUp(email: string, password: string, onSuccess: () => void): void {
    const user = new User(email, password);

    if (user.validate()) {
      auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          console.log('User signed up successfully!');
          onSuccess();
        })
        .catch((error: any) => {
          // Handle sign-up error
          Alert.alert('Sign-up Error', error.message);
        });
    } else {
      // Handle invalid credentials error
      Alert.alert(
        'Invalid Credentials',
        'Please enter a valid email and password.',
      );
    }
  }

  signOut(): void {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
}

export default AuthViewModel;
