import React from 'react'
import { StyleSheet,Dimensions, View, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const width = Dimensions.get('window')

export const styles = StyleSheet.create({
    scrollContainer :{
        // width : wp('100%'),
        // height: hp('100%'),
    },
    container : {
        width : wp('100%'),
        height: hp('100%'),
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    imageContainer : {
        width : wp('100%'),
        height: hp('31%'),

    },
    image: {
        flex: 1,
        width : wp('100%'),
       //Noooooooo // height : hp('31%'),
        // resizeMode : "center"
    },
    detailContainer :{
        width:  wp('100%'),
        height : hp('60%'),
        overflow : 'hidden',
        justifyContent : "space-evenly",
        backgroundColor: '#fff'
    },
    btnContainer : {
        width : wp('100%'),
        height : hp('20%'),
        flexDirection : 'row',
        justifyContent:'center',
        // backgroundColor : '#ff7f50'
    }
    
})

export const dotStyle = 
    <View style={{backgroundColor:'#f1f2f6',
    width: wp('1.6%'),
    height: hp('1.9%'),
    borderRadius: 5,
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
    marginTop: wp('1%'),
    marginBottom: wp('1%'),
}} />

export const activeDotStyle = <View style={{backgroundColor: '#006ada', 
 width: wp('1.95%'),
 height: hp('1.13%'), 
 borderRadius: 3, 
 marginLeft: wp('1%'),
 marginRight: wp('1%'),
 marginTop: wp('1%'),
 marginBottom: wp('1%'),
 
}} />
       
export const nextButtonStyle = <View style={{ alignItems:'center'}} >
    <Image source={require('../../../assets/icons/forward.png')} 
        style={{
            width: wp('9%'),
            height: hp('9%'),
          resizeMode : "center"}}/>
    </View>
export const prevButtonStyle = <View style={{  alignItems:'center'}}>
    <Image source={require('../../../assets/icons/previous.png')} 
      style={{
            width: wp('9%'),
            height: hp('9%'),
            resizeMode : "center"}}/>
    </View>
