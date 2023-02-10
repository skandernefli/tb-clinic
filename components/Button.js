import React from "react";
import {  Text,TouchableOpacity } from "react-native";

import {styles} from "../assests/stylesheet"
const DefaultButton=(title,onPress,style)=>{
        <TouchableOpacity onPress={onPress} style={[styles.defaultbutton , style]}>
            <Text style={styles.buttontext}>{title}</Text>
        </TouchableOpacity>

}
const TransparentButton=(title,onPress,style)=>{
    <TouchableOpacity onPress={onPress} style={[styles.transparentbutton , style]}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
}
const BorderlessButton=(title,onPress,style)=>{
    <TouchableOpacity onPress={onPress} style={[styles.borderlessbutton , style]}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>

}
const NavButton=(title,onPress,style)=>{
    <TouchableOpacity onPress={onPress} style={[styles.navbutton , style]}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>

}
const CenterButton=(title,onPress,style)=>{
    <TouchableOpacity onPress={onPress} style={[styles.centerbutton , style]}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>

}
export {
    DefaultButton,
    TransparentButton
};
