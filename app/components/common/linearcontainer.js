import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/globalstyleconstants';


export default function LinearContainer(props) {
    return (
        <LinearGradient
            {...props}
        >
            <View style={styles.children}>{props.children}</View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient:{
        flex:1,
    },
    children:{
        // flex:1
    }
})
