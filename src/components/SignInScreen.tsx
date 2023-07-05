import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import AuthViewModel from '../viewmodels/AuthViewModel';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/types';

type SignInScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
};

function SignInScreen({navigation}: SignInScreenProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const viewModel = new AuthViewModel();

  const handleSignIn = (): void => {
    viewModel.signIn(email, password);
    navigation.navigate('Home');
  };

  const handleSignUp = (): void => {
    navigation.navigate('SignUp'); // Navigate to SignUpScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign In" onPress={handleSignIn} />
        <Text style={styles.signUpPrompt}>
          Not signed up yet?{' '}
          <Text style={styles.signUpLink} onPress={handleSignUp}>
            Sign up here
          </Text>
          .
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '80%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  signUpPrompt: {
    marginTop: 16,
    textAlign: 'center',
    color: '#888',
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
