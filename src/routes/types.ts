import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define your screen names as string literals
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};

// Define the navigation props for each screen
type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;
type SignInScreenRouteProp = RouteProp<RootStackParamList, 'SignIn'>;

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;
type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// Export the types
export type {
  RootStackParamList,
  SignInScreenNavigationProp,
  SignInScreenRouteProp,
  SignUpScreenNavigationProp,
  SignUpScreenRouteProp,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
};
