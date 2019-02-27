import React,{ Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from '../styles/SDetailBox'
// const Uri = require('../../../assets/icons/chaira.png')

const DetailsBox = ({ title, data, uri })=>{
    const { container,imageContainer, dataContainer, titleStyle, dataStyle, line, imageStyle, verticalLine } = styles
    return(
        <View style={container}> 
            <View style={imageContainer}>
                <Image 
                    style={imageStyle}
                    source={uri}/>
            </View>

            <View style={verticalLine}>
                
            </View>


            <View style={dataContainer}>
                
                <Text style={titleStyle}>{title}</Text>

                <Text style={dataStyle}>{data}</Text>
                
            </View>
        </View>
    )
}

export default DetailsBox
