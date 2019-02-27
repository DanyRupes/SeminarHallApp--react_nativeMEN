import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, AsyncStorage} from 'react-native'
import * as Expo from 'expo'
import axios from 'axios'
import { NavigationActions } from 'react-navigation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {  Spinner } from '../../common'


class GSign extends Component {

    static navigationOptions = {
        title: 'Login',
      };


    state = {showSpiner: false}
    async componentWillMount() {
        try {
            await AsyncStorage.getItem('auth', (err, auth)=>{
                if(err){
                    console.log(err);return err}
                if(auth =='true'){
                    return this.props.navigation.dispatch(NavigationActions.navigate({
                       routeName : 'HomeTab'
                     }))
                }
            })
        }
        catch(e){console.log(e);return e}     
    }

    async onLoginClicked() {
        this.setState({showSpiner:true})
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId : '563836625256-vpd5vpsv6g65v3v7dk9mv2pkr1c5ka4n.apps.googleusercontent.com',
                iosClientId : '563836625256-pqg6iu6voehoibnknej14fsjjq146d4h.apps.googleusercontent.com',
                scopes: ['profile', 'email', ]})
            if(result.type === 'success'){
               const data = await this.getUserInfo(result.idToken)
               this.setState({showSpiner:false})
                    if(data != null)
                        {   
                            const home  = NavigationActions.navigate({
                               routeName :'HomeTab',
                               params : {
                                   ...data
                               },
                           })
                            const { email, name, given_name, picture }  = data
                            
                            try{
                                await AsyncStorage.setItem('auth', 'true')
                                const sb = await AsyncStorage.multiSet([['email', email],['name',name],['picture',picture],
                                ['given_name', given_name]])
                                this.props.navigation.dispatch(home)
                                return sb
                            }
                            catch(e){
                                console.log(e)
                                return e
                            }
                            
                            
                        }
                    else {
                        Alert.alert('Denied Access','Please Login with SREC Mail Account', [
                            {text:'okay', onPress:()=>{return this.startSignInAgain()}}
                        ]);
                    }
        }
                
        else {
                return this.setState({showSpiner: false})
            }
        }
        catch(e){ this.setState({showSpiner:false});console.log(e);return {error: true}}
    }

    startSignInAgain(){this.onLoginClicked()}

    getUserInfo(idToken) {
        try{
            return axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+idToken)
            .then((info) => {
                if(info.data.hd === 'srec.ac.in')
                    return info.data
                else
                    return null 
            })
        }
        catch(err){
            console.log(err)
            return err
        }
      }

      renderButton() {
        const { buttonStyle, buttonText } = styles    
        
        if(this.state.showSpiner) {
            return(<Spinner size="large"/>)
        }
        return(<TouchableOpacity style={buttonStyle}
                    onPress={this.onLoginClicked.bind(this)}
                >
                <Text style={buttonText}> Google SignIn</Text>
                </TouchableOpacity>
      )}


    render() {
        return(
            <View style={styles.container}>
                {this.renderButton()}
            </View> 
        )
    }
}

const styles = {
    container : {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderWidth:  1,
        borderColor: '#2e86de',
        width: wp('42%'),
        backgroundColor: '#2e86de',
        height: hp('6.5%'),
        padding: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'

    }
}

export default GSign