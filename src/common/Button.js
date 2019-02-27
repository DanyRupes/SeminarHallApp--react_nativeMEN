import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Buttun = ({btn_title,color,onBtnClicked, onPressIn })=>{
    return(
        <View style={styles.btn_style}>
            <TouchableOpacity
                // underlayColor={'#006ADA'}
                activeOpacity={0.2}
                style={styles.btn_style}
                // title={btn_title}
                // color= {color}
                onPress={onBtnClicked}>
                    <Text style={styles.textStyle}>
                        {btn_title}
                    </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    btn_style: {
        width: wp('75%'),
        height: hp('6.3%'),
        shadowColor: '#bb82e8',
        shadowOffset: { width: 6, height: 0 },
        shadowRadius: 6,
        borderRadius: 22,
        borderColor: '#74b9ff',
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'column',
        backgroundColor: '#0984e3',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    textStyle: {
        color: '#ffffff',
        fontFamily: 'Tempus-Sans',
        fontSize: 24,
        fontWeight: '400',
        // textAlign: 'center',

      },
}
export { Buttun }