import React,{useState} from "react";
import UniversalInput from "../../components/Input";
import { DefaultButton } from "../../components/Button";
import { WelcomeText, SmallText } from "../../components/Text";
import {touchableOpacity , View} from "react-native";
import { styles } from "../../assests/stylesheet";
const Login=()=>{
    const[emailOrUsername , setEmailOrUsername]=useState('');
    const[password , setPassword]=useState('');
    return(
        <View style={styles.loginContainer}>
            <View style={styles.authComponent}>
            <WelcomeText>Welcome Back!</WelcomeText>
            <SmallText>Sign in to your account</SmallText>
            </View>
            <View style={styles.authComponent}>
                
            </View>
            <DefaultButton>

            </DefaultButton>
            <View style={styles.authNav}>
                
            </View>
        </View>
    )
}



