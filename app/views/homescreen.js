import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View,Button,SafeAreaView } from 'react-native'
import { AuthContext } from "../config/authcontext";

// import MapView , { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

export default function HomeScreen() {
    const { signOut } = useContext(AuthContext);
    return (
        <View style={{flex:1}}>
            <Text>HomeScreen</Text>
            <View style={styles.cont}>
                <View style={{width:100}}>
                   <Button title='signout' onPress={()=>signOut()}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        // flex:1,
        position:'absolute',
        bottom:20,
        right:10,
        // justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'red'
        
    },
})
