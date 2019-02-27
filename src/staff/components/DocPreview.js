import React, { Component } from 'react'
import { View, Text, Image,TouchableOpacity, ImageBackground, WebView } from 'react-native'
import  { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TabBarIcon from '../../../assets/icons/TabBarIcon'

class DocPreview extends Component {

    componentDidMount() {
       
    }

    renderDocs() {

        const { textContainer, fileNameStyle, imageStyle, imageContainer, iconContainer} = styles

        return this.props.files.map((value, index)=>{
          
            const fileType = value.name.split('.')[1]
           
            if(fileType =='jpg' ||fileType =='jpeg'||fileType=='webp'||fileType=='png' || fileType=='bmp'){
                return (
                    <View key={index} style={imageContainer}>
                        <View style={iconContainer}>
                            <TabBarIcon 
                                name={'image'}
                                brand={'EvilIcons'}
                                size={28}
                                focused={true}/>
                        </View>
                        <Image style={imageStyle} source={{uri :value.uri}} />
                    </View>)
            }

            else {
                return (
                    <View key={index}  style={imageContainer}>
                        <View style={iconContainer}>
                            <TabBarIcon 
                                name={'file'}
                                brand={'Octicons'} 
                                size={28}
                                focused={true}/>
                        </View>
                        <Text style={imageStyle}>{value.name}</Text>
                    </View>) 
            }
                })
    }



    render(){
        const { container } = styles
        return(
            <View style={container}>
                    {this.renderDocs()}    
            </View>
        )
    }
}

const styles = {
    container : {
        // flex: 1,
        flexDirection: 'column',
        width: wp('78.8%'),
        // height: hp('7.3%'),
        paddingLeft : wp('5%'),
        paddingRight: wp('5%'),
    
    },
    imageContainer :{
        height: hp('10%'),
        width: wp('70%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('1.3%'),
    },
    iconContainer :{
        flex: 1,
        alignSelf: 'flex-start',
    },
    imageStyle :{
        flex: 4,
    },
}

export default DocPreview