import React from 'react';
import { Text } from 'react-native';
import {colors, FONTSIZE,FONTWEIGHT,FONTFAMILY} from '../assests/utils'


const WelcomeText=(props)=>{
    return(
        <Text style={{color:colors.TEXTCOLOR,fontSize:FONTSIZE.h1,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.bold}}>
            {props.children}
        </Text>
    )
}
const SmallText=(props)=>{
    return(
        <Text style={{color:colors.TEXTCOLOR,fontSize:FONTSIZE.h5,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.regular}}>
            {props.children}
        </Text>
    )
}
const HeaderText1=(props)=>{
    return(
        <Text style={{color:colors.PRIMARYCOLOR,fontSize:FONTSIZE.h3,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.bold}}>
            {props.children}
        </Text>     
    )
}
const HeaderText2=(props)=>{
    return(
        <Text style={{color:colors.TEXTCOLOR,fontSize:FONTSIZE.h3,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.bold}}>
            {props.children}
        </Text>     
    )
}
const PatientName=(props)=>{
    return(
        <Text style={{color:colors.TEXTCOLOR,fontSize:FONTSIZE.h5,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.semibold}}>
            {props.children}
        </Text>     
    )
}
const PatientInfo=(props)=>{
    return(
        <Text style={{color:colors.GREYTEXTCOLOR,fontSize:FONTSIZE.h6,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.regular}}>
            {props.children}
        </Text>     
    )
}
const RefferalRef=(props)=>{
    return(
        <Text style={{color:colors.TEXTCOLOR,fontSize:FONTSIZE.h7,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.regular}}>
            {props.children}
        </Text>     
    )
}
const PersonalInfo=(props)=>{
    return(
        <Text style={{color:colors.PRIMARYCOLOR,fontSize:FONTSIZE.h5,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.regular}}>
            {props.children}
        </Text>     
    )
}
const PersonalInfoHeader=(props)=>{
    return(
        <Text style={{color:colors.GREYTEXTCOLOR,fontSize:FONTSIZE.h6,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.semibold}}>
            {props.children}
        </Text>     
    )
}

const ProfileName=(props)=>{
    return(
        <Text style={{color:colors.PRIMARYCOLOR,fontSize:FONTSIZE.h4,fontFamily:FONTFAMILY,fontWeight:FONTWEIGHT.Bold}}>
            {props.children}
        </Text>     
    )
}



export {WelcomeText, HeaderText1,HeaderText2,SmallText,PatientInfo,PatientName,PersonalInfoHeader,ProfileName,PersonalInfo,RefferalRef};