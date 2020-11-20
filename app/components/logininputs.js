import React,{useRef} from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Card from './common/card'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'


const {width,height} = Dimensions.get('window')

export default function LoginInputs(props) {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const { email,password,emailHandler,passwordHandler } = props

    return (
        <View>
            <TouchableWithoutFeedback onPress={()=>{emailRef.current.focus()}}>
                <Card style={{...styles.card,marginTop:55}}>
                    <Image 
                        style={styles.icon} 
                        source={require("../assets/images/user_name.png")} 
                    />
                    <TextInput
                        ref={emailRef}
                        style={styles.Input}
                        placeholder="User Name"
                        placeholderTextColor="black"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorText="Please enter a valid email address."
                        initialValue=""
                        textAlign="center"
                        autoCompleteType="username"
                        returnKeyType="next"
                        onChangeText={emailHandler}
                        value={email}
                        onSubmitEditing={()=>passwordRef.current.focus()}
                    />
                </Card>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{passwordRef.current.focus()}}>
                <Card style={{...styles.card,marginTop:20}}>
                    <Image 
                        style={styles.icon} 
                        source={require("../assets/images/password.png")} 
                    />
                    <TextInput
                        ref={passwordRef}
                        style={styles.Input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorText="Please enter a valid email address."
                        initialValue=""
                        textAlign="center"
                        autoCompleteType="username"
                        returnKeyType="next"
                        onChangeText={passwordHandler}
                        value={password}
                        secureTextEntry={true}
                    />
                </Card>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection:'row',
        backgroundColor: "rgba(117,228,167,1)",
        width: width/1.3,
        // width:200,
        height:50,
        padding: 10,
        elevation: 3,
        borderRadius: 18,
        // marginTop: 55,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    icon:{
        width: (height / 27) + 10,
        height: (height / 27) + 10,
    },
    Input:{
        height: height / 18,
        marginRight:width/4,
        // backgroundColor:'red'
    },
})
