import React from 'react'
import {View , Text} from 'react-native'
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const Card = (props)=>{
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
}


const styles = {
    container : {
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop:10,
        // marginBottom: 2,
        width: wp('43.5%'),
        height: hp('32.0%'),
        borderRadius: 13,
        borderColor: '#dfd9d9',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        backgroundColor: '#ffffff',
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
        marginTop: hp('2%'),
        marginBottom: hp('0.7%'),

    }
}

export { Card }