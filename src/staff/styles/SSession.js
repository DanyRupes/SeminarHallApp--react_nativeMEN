import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop:15,
    backgroundColor:'#f4f3ef'
  },
  list: {
    flex: 1,
    marginTop:20,
  },

      calnedar : {
        height: hp('41%'),
        width: wp('100%')
      }
})//