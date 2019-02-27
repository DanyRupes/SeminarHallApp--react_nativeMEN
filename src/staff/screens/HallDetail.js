import React, { Component } from 'react'
import {View,Image, Text ,TouchableHighlight,Dimensions,BackHandler, ScrollView } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'
import Swiper from 'react-native-swiper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { styles,
     activeDotStyle, 
     dotStyle, 
     prevButtonStyle,
     nextButtonStyle } from '../styles/SHallDetail'
import DetailsBox from '../components/DetailsBox'
import { Buttun } from '../../common'


const screenWidth = Dimensions.get('window')


class HallDetail extends Component {

    static navigationOptions = ({navigation, navigation :{state}})=>({
        
        title: typeof(navigation.state.params)==='undefined' || 
        typeof(navigation.state.params.title) === 'undefined' ? 'Detail': navigation.state.params.title,
    })
    
    state = {imageSlider:[
        require('../../../assets/images/Spectacular_Alaska.jpg'),
        require('../../../assets/images/alaska_wallpaper1.jpg'),
        require('../../../assets/images/MAR180725.jpg'),
        require('../../../assets/images/imbolg.jpg'),
        require('../../../assets/images/kordilleren_borealer_nadelwald.jpg'),
        require('../../../assets/images/boreale.jpg')
    ], hall_ID : '', control : 1}

  
    render(){
        const Slider = props => (<Image style={styles.image} source={props.uri}/>)

        const { container, imageContainer, scrollContainer, detailContainer, btnContainer } = styles

        this.props.navigation.addListener('willBlur',  // didBlurSubScription.remove()
        payload =>{ this.handleBlur()}) //this.props.navigation.dispatch(StackActions.pop({n:1}))}

        // this.props.navigation.addListener('willFocus', payload=>{}) //this.handleState()
        this.props.navigation.addListener('didFocus', payload=>{this.Focusing()}) //this.handleState()
        this.props.navigation.addListener('willFocus', payload=>{this.willBeFocus()}) //this.handleState()
        
        return(
            <ScrollView style={scrollContainer} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={container}>
                <View style={imageContainer}>
                    <Swiper 
                        height={wp('40%')}
                        index={2}
                        showsButtons={true}
                        nextButton={nextButtonStyle}
                        prevButton={prevButtonStyle}
                        dot={dotStyle}
                        activeDot={activeDotStyle}
                        autoplay
                        autoplayTimeout={1.6}
                        loop={true}
                    >
                    {
                        this.state.imageSlider.map((item, i) => <Slider 
                            uri={item}
                            key={i}
                        />)
                    }
                    </Swiper>
                </View>
                <View style={detailContainer}>
                    {

                    }
                    <DetailsBox title="seats" uri={require('../../../assets/icons/chaira.png')} data="120 - Normal"/>
                    <DetailsBox title="Air Conditioner" uri={require('../../../assets/icons/air_cooler.png')} data="Voltas 185JY 1.5 Ton"/>
                    <DetailsBox title="Projector" uri={require('../../../assets/icons/projector.png')} data="BenQ W1070"/>
                    <DetailsBox title="Dimensions" uri={require('../../../assets/icons/scale.png')} data="497.56 m2"/>
                </View>
                
                <View style={btnContainer}>
                    <Buttun btn_title="Book Hall" color="#3498eb" onBtnClicked={this.onBookPressed.bind(this)}/>
                </View>
                
            </View>
            </ScrollView>
        )
    }

    Focusing() {
        try {
            this.setState({hall_ID : this.props.navigation.state.params.id})
        }catch(e){}
    }
    
    willBeFocus(){
    
    }
    
    onBookPressed() { //detail
        this.setState({ control : 2})
        const ToSession = StackActions.push({
            routeName : 'Sessions',
            params  : {
                id : this.state.hall_ID,
            },
            // action : NavigationActions.navigate({routeName : 'Sessions'})
        })

    this.props.navigation.dispatch(ToSession)

    }
    
    

    handleBlur() { //handle this state when going to out
        // console.log(this.props.navigation)
            if(this.state.control === 1){
                const navigationHome = NavigationActions.navigate({
                    routeName: 'HomeTab',
                    action : NavigationActions.navigate({routeName:'Home'})
                })
                
                this.props.navigation.dispatch(navigationHome)
            }
            else if(this.state.control === 2){
                this.setState({control : 1})
            }
            else {}
    }

    
}

export default HallDetail