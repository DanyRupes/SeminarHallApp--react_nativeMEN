import React, { Component } from 'react'
import { View, Text, ScrollView, 
    KeyboardAvoidingView, AsyncStorage, Alert   } from 'react-native'
import { NavigationAction, StackActions, Header } from 'react-navigation'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import styles from '../styles/SBookInfo'
import Input from '../components/Input'
import Attachment from '../components/Attachment'

const MaterialHeaderButton = props => (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
  );
class BookInfo extends Component {

    
    static navigationOptions = ({ navigation, navigation: { state } })=>({
        
        
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item title="cancel" iconName="cancel" onPress={() => navigation.goBack()} />
            </HeaderButtons>
            ),
            headerRight: (
                <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
                     <Item title="Done"  iconName="done" onPress={navigation.getParam('donePressing')} />
                </HeaderButtons>
                ),
    })
    
    state =  {isNameDisable :false,userName:'', department:'',title :'',
     description :'', files:'',titleFine:false,deptFine:false,descFine:false}

    async componentWillMount() {
        this.props.navigation.setParams({donePressing : this.donePressed})
        const name  = await AsyncStorage.getItem('name')
        if(name){
            this.setState({userName: name,isNameDisable:true})
        } else {
            this.setState({isNameDisable:false})
        }
    }

    donePressed = ()=>{
        const {userName, department, title, description } = this.state

        if(!this.state.descFine)
            Alert.alert('Please Fill Description','at least 10 characters')
        if(!this.state.deptFine)
            Alert.alert('Please Correct Department Field')
        if(!this.state.titleFine)
            Alert.alert('Please Correct Title Field')
    }

    putAttachments (files) {
        this.setState({files})
        // console.log(this.state.files)
    }
    onEndEditing = (index)=>{
        // console.log("End Edit "+index)
        const {userName, department, title, description } = this.state
        const regDepartment = /[^\s\A-z]|[\[\]\_\^]/g
        const regTitle= /[\w\d\s\W]{50}/g

        if(index==undefined) return undefined

        switch(index) { // department
            case 2:
                let deptLength = department.trim().length;
                    if( deptLength >=2 && department.match(regDepartment)==null){
                        this.setState({deptFine:true})
                        return 1
                    }
                    else if(deptLength==0) return undefined //showing error
                    else return 0
            case 3:
                let titleLength = title.trim().length
                    if( titleLength >=2 && title.match(regTitle)==null){
                        this.setState({titleFine:true})
                        return 1
                    }
                    else if(titleLength==0) return undefined //showing error
                    else return 0
            case 4:
                let descLength = description.trim().length
                    if( descLength >=15){
                        console.log("Description is fine")
                        return 1
                    }
                    else if(descLength==0) return undefined //showing error
                    else return 0
        }

    }

  
    render() {
        const { bookingContainer, container} = styles
        return (
            <KeyboardAvoidingView   style={bookingContainer} keyboardVerticalOffset = {Header.HEIGHT + 40} behavior="padding" enabled>
                <ScrollView style={container} keyboardShouldPersistTaps="always">
                    <Input 
                        placeholder = "Name "
                        iconUri = {require('../../../assets/icons/user.png')}
                        autoFocus={false}
                        value={this.state.userName}
                        disabled={this.state.isNameDisable}
                        onChangeText={(userName)=>this.setState({userName})}
                        onEndEditing={this.onEndEditing}
                        inputIndex={1}
                        />
                        <Input 
                        placeholder = "Your Department "
                        iconUri = {require('../../../assets/icons/conference_room.png')}
                        onChangeText={(department)=>this.setState({department})}
                        onEndEditing={this.onEndEditing}
                        inputIndex={2}
                        />
                        <Input 
                        placeholder = "Title of The Event "
                        iconUri = {require('../../../assets/icons/title.png')}
                        onChangeText={(title)=>{this.setState({title});if(this.state.title.trim().length>9)this.setState({descFine:true})}}
                        onEndEditing={this.onEndEditing}
                        inputIndex={3}
                        
                        />
                        <Input 
                        placeholder = "Description of the Event "
                        multiline={true}
                        iconUri = {require('../../../assets/icons/description.png')}
                        onChangeText={(description)=>{this.setState({description});if(this.state.description.trim().length>9)this.setState({descFine:true})}}
                        onEndEditing={this.onEndEditing}
                        inputIndex={4}
                        
                    />

                    <Attachment 
                        style={{flexGrow: 1}}
                        attachments={this.putAttachments.bind(this)}
                        iconUri = {require('../../../assets/icons/attachment.png')}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default BookInfo