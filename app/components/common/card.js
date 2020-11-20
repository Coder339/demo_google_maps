import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
        <View {...props.style}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({})
