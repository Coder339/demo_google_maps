import React,{ useState,useContext,useEffect } from 'react'
import { StyleSheet, Text,Image, View,Button,Alert, Dimensions,ScrollView,KeyboardAvoidingView,TouchableOpacity,ImageBackground, Platform } from 'react-native'
import LinearContainer from '../components/common/linearcontainer';

import axios from 'axios';
import LoginInputs from '../components/logininputs';
import Card from '../components/common/card';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fontSize, font } from '../assets/globalstyleconstants';
import { serviceUrl } from '../config/serviceurl';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../config/authcontext';
import { GoogleSignin } from '@react-native-community/google-signin';

const figmaDesginWindowWidth = 1080;
const figmaDesginWindowHeight = 2340;

const figmaDesginLogoWidth = 400
const figmaDesginLogoHeight = 400

const {width,height} = Dimensions.get('window')

export default function Login() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [secureEntry,setsecureEntry] = useState(true)

    const [loading,  setloading] = useState(true)
    const navigation = useNavigation()
    
    const { signIn,googleLogin } = useContext(AuthContext);
    
    const emailHandler = (text) => {
        setEmail(text)
    }
    
    const passwordHandler = (text) => {
        setPassword(text)
    }
     

    const loginHandler = (email,password) => {
        console.log('post')
        console.log(email)
        console.log(password)
        
        return axios.post(serviceUrl + '/login',{

            email: email,
            password: password,

        }).then(res => {
            let token = res.data.token;
            console.log(token)
            // let user = res.data.user;
            // console.log(user)
            signIn(email,password,token)
        }).catch(err=>{
            console.log(err)
            Alert.alert('Check your credentials','email and password do not match',
            [{ text: 'okay',onPress: resetHandler()}])
            return
        })
             
    }

    const resetHandler = () => {
        setEmail('')
        setPassword('')
        
    }
    
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);

      }, []);

    return (
        <KeyboardAvoidingView 
          behavior={'height'}  // for ios 'padding'
          enabled  
          style={{flexGrow:1,height:'100%'}}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                    <LinearContainer
                      colors={['#FFFFFF','#77F8E4']}
                      style={styles.gradient}
                    > 
                        <View style={[styles.container,{height:height}]}>
                            <Image 
                              style={styles.icon_style} 
                              source={require("../assets/images/logo.png")} 
                            />
                            <View style={styles.main_card}>
                                <LoginInputs
                                  email={email}
                                  password={password}
                                  emailHandler={emailHandler}
                                  passwordHandler={passwordHandler}
                                />
                                <Card style={{...styles.card,margin:20}}>
                                    <TouchableOpacity 
                                        onPress={() => loginHandler(email, password)}>
                                        <Text style={styles.buttonText}>login</Text>
                                    </TouchableOpacity>
                                </Card>
                                <TouchableOpacity onPress={()=>alert('hello')}>
                                    <Text style={{fontFamily:font.ralewayLight}}>FORGOT PASSWORD</Text>
                                </TouchableOpacity>
                                <TouchableWithoutFeedback onPress={()=>navigation.navigate('SignUp')}>
                                    <Text style={styles.register}>Register Here</Text>
                                </TouchableWithoutFeedback>
                            </View>
                            {Platform.OS === 'android' ? 
                                <View>
                                    <TouchableOpacity onPress={()=>googleLogin()}>
                                        <Image style={styles.auth_icon_style} source={require("../assets/images/google_logo.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={styles.auth_icon_style} source={require("../assets/images/facebook_logo.png")} />
                                    </TouchableOpacity>
                                </View>
                                : 
                                null
                            }
                        </View>
                    </LinearContainer>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        position:'relative',
        // flex:1,
        // justifyContent:'center',
        alignItems:'center',
    },
    gradient:{
        // flex:1,
    },
    main_card: {
        backgroundColor: "rgba(18,209,228,0.33)",
        width: "85%",
        height:height/2.1,
        alignItems: "center",
        // justifyContent:'center',
        marginTop: height/7,
        borderRadius: 20,
      },
    icon_style: {
        position: "absolute",
        elevation:1,
        marginTop:15,
        width: width * figmaDesginLogoWidth / figmaDesginWindowWidth,
        height: width * figmaDesginLogoWidth / figmaDesginWindowWidth,
        resizeMode: "stretch"
    },
    card: {
        flexDirection:'row',
        backgroundColor: "#000",
        width: width/1.3,
        height:50,
        // padding: 10,
        elevation: 3,
        borderRadius: 18,
        // marginTop: 55,
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:fontSize.extralarge,
        letterSpacing:2,
        color:'#fff',
        textTransform:'uppercase',
    },
    auth_icon_style: {
        marginTop: 20,
        width: (height / 13),
        height: (height / 13),
        // resizeMode: "contain",
    },
    register:{
        fontFamily:font.ralewayBlackItalic,
        marginTop:5,
    }
    
})

