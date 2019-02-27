import React,{Component} from 'react' 
import {View, Text, Image} from 'react-native'
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


class CardDetails extends Component {
    render() {
        const { container, image, details, titleText, line } = styles
        return(
            <View style={[container,this.props.CardDetailStyle]}>
                <Image style={image}
                    source={{uri:this.props.uri}}
                >
                 
                </Image>
                <View style={line}/>
                <View style={details}>
                    <Text style={titleText}>
                        {this.props.titleText}                  
                    </Text>
                </View>

            </View>
        )
    }
}

const styles = {
    container :{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',

    },
    image :{
        flex: 2,
    },
    line:{
        width: wp('43%'),
        borderWidth: .6,
        borderColor: '#ddd'
    },
    details: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 13,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:   'center',
        
    },
    titleText : {
        color: '#2a5477',
        fontFamily: 'perpetua-reg',
        fontSize: 22,
        fontWeight: '400',
    }, 
}

export {CardDetails}