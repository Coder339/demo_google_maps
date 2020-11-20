import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useMemo, useState, useEffect,useReducer } from 'react';
import { 
  Button, 
  View,
  StyleSheet, 
  Text,
  ActivityIndicator } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native';

import { AuthStack }from './app/config/router';
import { AuthContext } from './app/config/authcontext';
import HomeScreen from './app/views/homescreen';

import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken,user }) => (
  
  <RootStack.Navigator headerMode="none">
    
    {userToken || user ? ( 
      <RootStack.Screen
        name="App"
        component={HomeScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStack}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);



export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  // const colorScheme = useColorScheme()

  // const MyTheme = {
  //   dark: false,
  //   colors: {
  //     primary: 'rgb(255, 45, 85)',
  //     background: 'rgb(242, 242, 242)',
  //     card: '#DCDCDC',
  //     text: 'rgb(28, 28, 30)',
  //     border: 'rgb(199, 199, 204)',
  //   },
  // };

  // let userToken;
  //     userToken = null;

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState,action) => {
    console.log('vikas')
    console.log(action.type)
    console.log(action.token)
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
    
  };
  
  const [loginState,dispatch] = useReducer(loginReducer,initialLoginState)
  

  const authContext = useMemo(() => ({
      signIn: async(email,password,token) => {
        // setIsLoading(false);
        // setUserToken("asdf");
        
        // console.log(username)
        console.log(password)
        let userToken;
        userToken = null;
        if(email&&token){
          try {
            userToken = token
            await AsyncStorage.setItem('userToken', userToken)
          } catch (e) {
            console.log(e)
          }
        }
        dispatch({ type: 'LOGIN',id: email, token: userToken})
        // console.log(userToken)
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: async() => {
        // setIsLoading(false);
        // setUserToken(null);
        try {
          await AsyncStorage.removeItem('userToken')
          await auth().signOut();   //google logout
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (e) {
          console.log(e)
        }
        dispatch({type: 'LOGOUT'})
      },
      googleLogin: async()=>{
        try{
          // Get the users ID token
          const { idToken } = await GoogleSignin.signIn();

          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);

          // Sign-in the user with the credential
          await auth().signInWithCredential(googleCredential);
        } catch(err) {
          console.log(err)
        }
      }
  
  }), []);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({type: 'RETRIEVE_TOKEN',token: userToken})
    }, 1000);

    GoogleSignin.configure({
      webClientId: '170241595518-5p5p49737o54i9e0r5jjqq6gl5sa84sc.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

  }, []);
  
  if (initializing) return null;

  if (loginState.isLoading) {
    return <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
           </View>;
  }
  else {

    return (
      
          <AuthContext.Provider value={authContext}>
            <NavigationContainer >
              <RootStackScreen userToken={loginState.userToken} user={user}/>
            </NavigationContainer>
          </AuthContext.Provider>
          
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 650,
    // resizeMode: 'contain',

  }
});

