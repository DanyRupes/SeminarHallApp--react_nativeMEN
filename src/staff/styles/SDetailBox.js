import React from  'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    container : {
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        // flex: 1,
        // backgroundColor: '#ffa502'
     
    },
    imageContainer: {
        // flex: 1,
        width : wp('20%'),
        height: hp('10%'),
        paddingLeft: 13,
        paddingTop: 6,
        paddingRight: 13,
        // paddingBottom: 3,
        // backgroundColor: '#ff6b81'
    },
    imageStyle :{
        width : wp('15%'),
        height: hp('8%'),
        resizeMode : "center"
    },
    dataContainer :{
        width : wp('80%'),
        height: hp('10%'),
        justifyContent : 'space-between',
        paddingLeft : 10,
        // backgroundColor : '#70a1ff',
    },
    titleStyle :{
        opacity: 0.85,
        color: '#8a98a7',
        fontFamily: 'Lucida-Sans',
        fontSize: 16,
        fontWeight: '400',
    },
    dataStyle :{
        color: '#006ADA',
        fontFamily: 'perpetua-reg',
        fontSize: 26,
        fontWeight: '400',
        marginLeft: 10,

        // paddingBottom: 15,
    }, 
    line :{
        // width : wp('80%'),
        // borderWidth : 0.5,
        // height : hp('.15%'),
        // borderColor : '#e2d8d8',
        // alignSelf : 'flex-end',
        // paddingLeft: -10
    },
    verticalLine :{
        borderColor: '#e2d8d8',
        width : wp('.15%'),
        borderWidth : 0.5,
        height : hp('11%'),
        borderColor : '#e2d8d8', 
        marginTop: -5.25,
    }   
})