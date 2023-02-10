import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import { styles } from '../assests/stylesheet';
import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5Pro'
import { IconSize,colors } from '../assests/utils';

const NavBar=()=>{
    const[currentScreen,setCurrentScreen]=useState('Home');
    return(
         <VIew style={styles.navbarContainer}>
            <View style={styles.navbarBottombar}>
                <TouchableOpacityW
                style={styles.navbarButton}
                onPress={()=>setCurrentScreen('Home')}>
                </TouchableOpacityW>
                <Icon
                name="home"
                size={IconSize}
                color={currentScreen ==='Home' ? colors.SECONDARYCOLOR : colors.GREYTEXTCOLOR}
                />
                
                <TouchableOpacityW
                style={styles.navbarButton}
                onPress={()=>setCurrentScreen('PatientList')}>
                </TouchableOpacityW>
                <Icon
                name="stethoscope"
                size={IconSize}
                color={currentScreen ==='PatientList' ? colors.SECONDARYCOLOR : colors.GREYTEXTCOLOR}
                />

                <TouchableOpacityW
                style={styles.navbarButton}
                onPress={()=>setCurrentScreen('OurCenters')}>
                </TouchableOpacityW>
                <Icon
                name="home"
                size={map-pin}
                color={currentScreen ==='OurCenters' ? colors.SECONDARYCOLOR : colors.GREYTEXTCOLOR}
                />

                <TouchableOpacityW
                style={styles.navbarButton}
                onPress={()=>setCurrentScreen('PatientList')}>
                </TouchableOpacityW>
                <Icon
                name="phone"
                size={IconSize}
                color={currentScreen ==='PatientList' ? colors.SECONDARYCOLOR : colors.GREYTEXTCOLOR}
                />

                
            </View>
            <View style={styles.navbarRoundView}>
                <TouchableOpacity style={styles.navbarRoundedButton}>
                <Icon
                name="hospital-user"
                size={IconSize}
                color={colors.TEXTCOLOR}
                />
                </TouchableOpacity>
            </View>
         </VIew>
    )
}
export default NavBar;