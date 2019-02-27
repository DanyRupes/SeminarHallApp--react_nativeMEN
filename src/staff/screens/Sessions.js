import React, { Component } from 'react'
import { View, Text, TouchableHighlight, ScrollView, Button,Alert } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import { Calendar} from 'react-native-calendars'
import Timeline from 'react-native-timeline-listview'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import styles from '../styles/SSession'
import TabBarIcon from '../../../assets/icons/TabBarIcon'
import { Spinner } from '../../common';


const MaterialHeaderButton = props => (
    <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color="blue" />
  );

class Sessions extends Component {
    
    state = {control : 1, data: {}, showSpinner :true, addedSessions:[], Navloaded:false}
//     <View>
//     {this.state.showDone ? <TabBarIcon 
//             name="done-all"
//             brand="MaterialIcons"
//             size={28}
//             color={'#060ada'}
//         />:''}
// </View>
        static navigationOptions = ({ navigation, navigation: { state } }) => ({
            title: 'Pick Date',
            headerRight: (
                <HeaderButtons left HeaderButtonComponent={MaterialHeaderButton}>
                <Item
                  title={state.params && state.params.showIcon ? 'Done' : ''}
                  iconName={state.params && state.params.showIcon ? 'done-all' : undefined}
                  onPress={navigation.getParam('submitAdded')}
                />
              </HeaderButtons>
            ),
          });


    submitAdded = ()=>{
        this.props.navigation.dispatch(StackActions.push({
            routeName : 'BookInfo',
            params : {
                sessions : this.state.addedSessions
            }
        }))
    }


    renderRightHead() {
        console.log("hello")
    }

    componentDidMount() {
            this.setState({data : [
            {time: 'Session 1', title: '8.45 - 9.40 Am', description: 'Available', status: 0},
            {time: 'Session 2', title: '9.40 - 10.35 Am', description: 'Available',status: 0},
            {time: 'Session 3', title: '10.35 - 11.30 Am', description: 'Booked', status: 1},
            {time: 'Session 4', title: '11.30 - 12.25 Pm', description: 'Booked', status: 1},
            {time: '  Lunch    ', title: '12.25 - 1.20 Pm', status:0,description: 'Available'},
            {time: 'Session 5', title: '1.20 - 2.15 Pm', description: 'Available', status: 0},
            {time: 'Session 6', title: '2.15 - 3.10 Pm', description: 'Available', status: 0},
            {time: 'Session 7', title: '3.10 - 4.05 Pm', description: 'Booked', status: 1},
            {time: 'Session 8', title: '4.05 - 5.00 Pm', description: 'Booked', status: 1},
        ], showSpinner : false})
        


        // setting submitAdded to navigation params
        this.props.navigation.setParams({submitAdded : this.submitAdded})
    }
    
    render() {
        const { container } = styles

        // this.navListener = this.props.navigation.addListener('willFocus', payload=>{)
// console.log(this.state.data)

        this.props.navigation.addListener('willBlur', payload=>{this.handleBlur()})
        this.props.navigation.addListener('didFocus', payload=>{this.setState({Navloaded:true})})
        return(
            <ScrollView style={this.state.Navloaded?{flex:1}:{height:hp('100%')}}> 
            <View style={this.state.Navloaded? {flex:1} :{height:hp('50%')}}>
                 {this.state.Navloaded ? this.renderAgenda():<Spinner size="small"/>}
            </View>

            <View style={this.state.Navloaded? container :{height:hp('50%')}}>
                 {this.state.Navloaded ? this.renderTimeline():<Spinner size="large"/>}
            </View>
            </ScrollView>
        )
    }


         renderTimeline()
            {
                return (<Timeline 
                innerCircle={'dot'}   
                style={styles.list}
                separator={false}
                detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#fff", borderRadius: 10}}
                columnFormat='single-column-left'
                data={this.state.data}
                onAddPressed={this.onAddPressed.bind(this)}
                onEventPress={(day)=>{console.log(day)}}
                />)
                 
                
        }

    onDayPressed(val){console.log(val)}


   renderAgenda(){
        return(
            <Calendar
            // Specify style for calendar container element. Default = {}
            style={styles.calnedar}
            renderArrow= {item=>item=='left' ?  (<TabBarIcon size={22} name="arrow-left" brand="SimpleLineIcons" focused={true}/>) :
                    (<TabBarIcon size={22} name="arrow-right" brand="SimpleLineIcons" focused={true}/>) }
            onDayPress={this.onDayPressed.bind(this)}
            onDayLongPress={this.onDayPressed.bind(this)}
            theme={this.theme}
          />
        )
    }


    onAddPressed(period){
        const { navigation: { state }} = this.props;
        const index = this.state.addedSessions.indexOf(period);
        
        if(index==-1) //if not already added 
            {this.state.addedSessions.push(period)}
        
            else {this.state.addedSessions.splice(index, 1)} //removing already added . free up that session    
        
        if(this.state.addedSessions.length>0)
            this.props.navigation.setParams({ showIcon:true}) //!(state.params && state.params.showIcon)
        else
            this.props.navigation.setParams({ showIcon:false})
        
    }
    handleBlur() {
        let control = this.state.control
        if(control===1){ // going back
            
        }else {
           
        }
        // this.setState({control : 2})
        // console.log("back first-----------------")
        // const takeMeBack = NavigationActions.navigate({
        //     routeName : 'Hall_Detail',
        //     action : NavigationActions.navigate({routeName:'Hall_Detail'})
        // })
        // this.props.navigation.dispatch(takeMeBack)
    }
}


const theme = {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#718093',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#8c7ae6',
        selectedDotColor: '#ffffff',
        monthTextColor: '#060ada',
        textDayFontFamily: 'Lucida-Sans',
        textMonthFontFamily: 'perpetua-reg',
        textDayHeaderFontFamily: 'Tempus-Sans',
    //   textMonthFontWeight: 'bold',
        textDayFontSize: 13,
        textMonthFontSize: 17,
        textDayHeaderFontSize: 14, 
    }

export default Sessions






  