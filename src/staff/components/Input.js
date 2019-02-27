import React, { Component } from 'react'
import { View, TextInput, Image,
    TouchableOpacity,Text } from 'react-native'
import  { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import TabBarIcon from '../../../assets/icons/TabBarIcon'

class Input extends Component {

    state = {isfocused : false, isMultiline : false,hasError:false, id: '',showErrorData: false, errorData:''}
    handleFocus = ()=>{
        this.setState({isfocused:true})
    }

    componentWillMount (){
        if(this.props.multiline) {
            this.setState({isMultiline :true})  
        }
    }


    handleStyling (success) {
       
        let inputIndex = this.props.inputIndex;
        if(success==undefined) {this.setState({hasError:false})}
        
        else if(success==1){    //success
            this.setState({hasError:false})
        }
        else { //showing error
            this.setState({hasError :true, id:inputIndex})
                if(inputIndex==2) //department
                    this.setState({errorData :'Valid Department Required !!'})
                else if(inputIndex==3)
                    this.setState({errorData :'Title length exceeding !!'})
                else    
                    this.setState({errorData :'Make Description at least 15 Characters.!'})
        }
    }

    render() {
        const iconUri = this.props.iconUri
        const  {bigIcon, icon, TextInputStyle, container, inputContainer, bigTextInput, bigContainer}  = styles
        
        return (
        <View style={this.state.isMultiline ? bigContainer: container}>
            <View style={inputContainer} pointerEvents={this.props.disabled ? 'none':'auto'}>

                   <Image 
                        style={!this.state.isMultiline ? icon : bigIcon}
                        source={iconUri}
                    />
                    
                        <TextInput 
                            onChangeText={this.props.onChangeText}
                            style={[this.state.isMultiline ? bigTextInput: TextInputStyle]}
                            selectionColor={'#00a8ff'}       
                            value={this.props.value}
                            onFocus={this.handleFocus}
                            underlineColorAndroid={!this.state.isMultiline ? this.state.isfocused ? '#3498EB': '#7f8fa6'
                            :'#fff'}
                            onBlur={()=>this.setState({isfocused : false})}
                            placeholder={this.props.placeholder}
                            multiline={this.props.multiline}
                            autoFocus={this.props.autoFocus}
                            onEndEditing={()=>this.handleStyling(this.props.onEndEditing(this.props.inputIndex))}
                        />

                        {this.state.hasError ? 
                            <TouchableOpacity
                                onPress={()=>this.setState({showErrorData: !this.state.showErrorData})}
                                activeOpacity={.3}>
                            <TabBarIcon
                            name="error-outline"
                            brand="MaterialIcons"
                            size={26}
                            focusBack='#ff4d4d'
                            /></TouchableOpacity>
                            :<View />}
            </View>
                            {this.state.showErrorData && this.state.hasError ? 
                                <View >
                                    <Text style={{textAlign:"center",color: '#ff4d4d'}}>{this.state.errorData}</Text>
                                </View> :
                                <View/>}
        </View>
        )
    }
}
const styles = {
    bigContainer : {
        height: hp('26%'),
        width: wp('100%'),
        marginTop: hp('4.6%'),
        marginBottom: hp('4%')

    },
    container :{
        height: hp('12%'),
        width: wp('100%'),
        
    },

    inputContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft : wp('5%'),
        paddingRight: wp('5%')
    },
    TextInputStyle :{
        flex: 2,
        height: 40,
        paddingLeft: 6,
        fontSize: 16,
    },
    bigTextInput: {
        height: hp('26%'),
        width: wp('78.8%'),
        paddingRight: wp('6%'),
        fontSize: 16,
        borderStyle: 'solid',
        borderColor: '#7f8fa6',
        borderWidth: 1,
        paddingLeft: wp('2%'),
        justifyContent: 'flex-start',  
    },
    icon :{
        height: 37,
        width: 37,
        paddingRight: wp('1%'),
    },
    bigIcon : {
        height: 37,
        width: 37,
        paddingRight: wp('1%'),
        alignSelf:"flex-start"
    }
}
export default Input