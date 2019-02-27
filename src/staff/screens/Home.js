import React, { Component } from 'react'
import { View, Text ,StatusBar, ScrollView,
        TouchableHighlight,
        AsyncStorage} from 'react-native'
import {  Card, CardDetails, Spinner } from "../../common";
import { StackActions, NavigationActions } from 'react-navigation'
import axios from 'axios'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import stlyes from '../styles/SHome'


class HomeScreen extends Component {
    state = {cardPressIn : false, homeData  : [], showSpinner: true}
    static navigationOptions = {
        title: 'Home'
    }

    callBack = (err, data)=>{if (err) return err;else {
        // console.log(data[0][0]) name
        // console.log(data[0][1]) DANYRUPES ARPUTHARAJ
        // console.log(data[1][0]) email
        console.log(data) //danyrupes.1505026@srec.ac.in
        this.setState({showSpinner:false})
    }}
    checkAuth = (err,auth)=>{if(err)console.log(a);else console.log("Auth True")}
    componentDidMount() {
        const homeData = await axios.get('https://wt-0a7a86a77e4765009d8fb31377b3adbb-0.sandbox.auth0-extend.com/ng-hack-backend/shb/homepage/feed/common')
        this.state.homeData.push(...homeData.data)
        this.setState({showSpinner: false}) 
        
        AsyncStorage.multiGet(['name','email','picture'], this.callBack)
      }


        // componentDidMount(){
        //     console.log("Just for Tempoerary @Home #Routing to #Booking Info")
        //     // const pushAction = NavigationActions.navigate({
        //     //     routeName: 'BookInfo',
        //     //     params: {id:"0", title:"IT HALL"},
        //     //     action : NavigationActions.navigate({routeName :'BookInfo'})
        //     //   });
        //     const pushAction = NavigationActions.navigate({
        //         routeName: 'Home',
        //         action : NavigationActions.navigate({routeName :'Home'})
        //       });
        //       this.props.navigation.dispatch(pushAction);
        // }



      render(){
        // let i = 0
        const {container, cardPressinStyle,CardStyle } = stlyes
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{height:heightPercentageToDP('100%')}}>
            <View style={container}>
            {
                this.state.showSpinner === true ? <Spinner/> :
                        this.state.homeData.map((item, i)=>{
                    return(
                        <TouchableHighlight key={i}
                        onPressIn={()=>{this.setState({cardPressIn: true})}}
                            // style={this.state.cardPressIn==true ? cardPressinStyle : CardStyle}
                        
                        onPress={()=>{this.onCardClicked(i,item.title)}}
                        >
                        
                            <Card >
                                <CardDetails
                                    uri={'http://www.maharishiinstituteofmanagement.com/images/mim_life/seminarHall.jpg'}
                                    titleText={item.title}>
                                </CardDetails>
                            </Card>
                    </TouchableHighlight>
                    )
                })
            }
                
            </View></ScrollView>)
    }


    onCardClicked(id, title) { //goint to a hall Home
        const pushAction = StackActions.push({
            routeName: 'Hall_Detail',
            params: {id, title},
          });
          this.props.navigation.dispatch(pushAction);
    }

}

export default HomeScreen