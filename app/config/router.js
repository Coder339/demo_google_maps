import * as React from 'react';
// import { colors } from '../assets/globalstyleconstants';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../views/login';
import HomeScreen from '../views/homescreen';




const RootStack = createStackNavigator();  // Testing as of now. 

const HomeStack = createStackNavigator();




export function AuthStack() {
  return (
    <RootStack.Navigator
      mode='modal'
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <RootStack.Screen name="SignIn" component={Login} />
    </RootStack.Navigator>
  );
}

export function Home() {

  return (
    <HomeStack.Navigator
      mode='modal'
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Explore" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
