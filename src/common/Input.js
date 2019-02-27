import React, {Component} from 'react'
import {View, TextInput,Text} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Input = ({ label, value, onChangeText, textContentType, placeholder, secureTextEntry, multiline, autoFocus })=>{
    const { container, TextInputStyle } = styles
    
    return(
        <View style={container}>
            
            <TextInput 
            autoFocus={autoFocus}
            autoCorrect={false}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor='#0b0924'
            underlineColorAndroid='transparent'
            style={TextInputStyle}
            value={value}
            multiline={multiline}
            onChangeText={onChangeText}/>
        </View>
        )
}

const styles = {
    container:{
        width: wp('80%'),
        height: hp('8%'),//60
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: -6, height: 10 },
        shadowRadius: 6,
        borderRadius: 24,
        backgroundColor: '#c2c2c2',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
      },
    TextInputStyle :{
        paddingLeft: 10,
        paddingRight: 10,
        width: null,
        height: 23,
        opacity: 0.59,
        color: '#0b0924',
        // fontFamily: 'Javanese Text',
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center',
    }
}

export { Input }