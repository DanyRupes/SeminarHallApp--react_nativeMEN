import React from 'react'
import { View } from 'react-native'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import HomeTabNavigator from './Home/HomeTabNavigator'
// import AppRoute from './AppRoute'
import HallDetail from '../screens/HallDetail'
import Sessions from '../screens/Sessions'
import GSign from '../screens/GsignIn'
import BookInfo from '../screens/BookInfo'
import { LinearGradient }from 'expo'

const styles = {    
        headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '200',
            color: '#45aaf2',
            textAlign: 'center',
            flex: 1,
            fontSize: 18
          },
}

const { headerStyle, headerTitleStyle} = styles
const AppRoute =  createStackNavigator({
    Hall_Detail :  {screen:HallDetail,
        navigationOptions : {
            headerStyle: headerStyle,
            headerTitleStyle : headerTitleStyle,
            headerRight: <View />,
    }},
    
    Sessions : {screen: Sessions,
    navigationOptions : {
        headerStyle: headerStyle,
        headerTitleStyle : headerTitleStyle,
    }},


    BookInfo: {screen:BookInfo,
        navigationOptions : {
            headerStyle: headerStyle,
            headerTitleStyle : headerTitleStyle,
            title : 'Booking Info'
        },
        headerBackground: (
        <LinearGradient
          colors={['#F52828', '#F76B1C']}
          style={{ flex: 1, width: '100%' }}
        />
      ),
    }
})
const Auth =  createStackNavigator({
    GSign : GSign,
})

class Appp extends React.Component {
    static router = AppRoute.router
    render(){
        return(
            <AppRoute navigation={this.props.navigation}/>
        )        
    }
}


export default createSwitchNavigator({
    Auth : Auth,
    App: Appp,
    HomeTab : HomeTabNavigator,
}) 