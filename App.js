/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView , { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

const App= () => {
  return (
    <>
      
      <SafeAreaView>
        <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
           }}>
            <Marker
              coordinate={{latitude: 37.76825,
                longitude: -122.4324,}}
              title='san francisco'
              description='nice place'
            />
        </MapView>
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
   map:{
     height:'100%'
   }
  
});

export default App;

























































// <MapView
//         provider={PROVIDER_GOOGLE}
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{latitude: 37.76810,longitude: -122.4324}}
//           title='SAN FRANCISCO'
//           description='NICE PLACE'
//         />
// </MapView> 