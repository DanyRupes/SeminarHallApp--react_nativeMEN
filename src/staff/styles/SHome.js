import { StyleSheet } from 'react-native'
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const stlyes = StyleSheet.create({
    container : {
        height : hp('100%'),
        width : wp('100%'),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
        backgroundColor: '#f1f2f6',
    },
    cardPressinStyle :{
        backgroundColor : '#1e90ff'
    },
    CardStyle :{
        backgroundColor : '#fff'
    }

})
export default stlyes