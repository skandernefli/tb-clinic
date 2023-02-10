import React from 'react';
import { Input } from 'galio-framework';
import { View } from 'react-native';
import { styles } from '../assests/stylesheet';

return UniversalInput=(props)=>{
    return(
        <View style={styles.inputContainer}>
            <Input
            placeholder={props.placeholder}
            style={styles.input}
            icon={props.icon}
            iconColor="#353366"
            right
            iconSize='20'
            family={props.family}
            onChangeText={props.onChangeText}
            secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
export default UniversalInput;