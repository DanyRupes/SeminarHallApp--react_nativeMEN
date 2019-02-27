import React, { Component } from 'react'
import { View, Text, Image,TouchableOpacity, ImageBackground, WebView } from 'react-native'
import  { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { DocumentPicker }from 'expo'
import DocPreview from './DocPreview'
class Attachment extends Component {

    state = {docs : []}

  
    getAttachment = async () =>{
        const doc = await DocumentPicker.getDocumentAsync({})
        if(doc.uri){
            this.setState({docs: [...this.state.docs,{uri: doc.uri, name: doc.name}]})
            this.props.attachments(this.state.docs)       
        }
    }
    onFinish = ()=>{
        console.log("finished laoding")
    }
   
    renderFiles (){
        
           return (<DocPreview 
                icon="file"
                brand="Octicons"
                files = {this.state.docs}
                
            />)
    }

    render() {
        const  {container,inputContainer, attachmentContainer, 
            attachmentText, icon, attachmentBack, FilesContainer}  = styles
        
        return (
            <View style={container}>
                <View style={inputContainer}>
                        <Image 
                            style={icon}
                            source={this.props.iconUri}
                        />
                        
                        <TouchableOpacity 
                            style={attachmentContainer}
                            placeholder = "Add AttachMent"
                            iconUri = {require('../../../assets/icons/attachment.png')}
                            onPress = {this.getAttachment}
                            activeOpacity={0.7}

                        >   
                        <ImageBackground style={attachmentBack} source={require('../../../assets/images/attachment_back.png')}>
                            
                                <Text style={attachmentText}>
                                    Add Attachment
                                </Text>

                        </ImageBackground>
                        </TouchableOpacity>
                        

                    </View>

                <View style={FilesContainer}>
                    {this.state.docs.length > 0 ?this.renderFiles():<Text></Text>}
            </View>
            </View>

        )
    }
}
const styles = {
    container :{
        // height: hp('12%'),
        // backgroundColor: '#ff9ff3',
        width: wp('100%'),
    },
    inputContainer :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft : wp('5%'),
        paddingRight: wp('5%'),
        marginBottom: hp('1.5%')   
    },
    attachmentContainer :{
        width: wp('78.8%'),
        height: hp('7.3%'),
        textAlign: 'center',
    },
    attachmentBack :{
        width: wp('78.8%'),
        height: hp('7.3%'),
        // justifyContent: 'center',
        paddingTop: hp('1.5%'),
        paddingBottom: hp('1.5%')
    },
    attachmentText : {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '400',
    },
    icon :{
        height: 37,
        width: 37,
        paddingRight: wp('1%'),
    },
    FilesContainer :{
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft : wp('10%'),
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
       
    },
}
export default Attachment