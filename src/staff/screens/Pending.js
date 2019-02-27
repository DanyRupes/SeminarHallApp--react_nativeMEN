import React, { Component } from 'react'
import { View, Text } from 'react-native'

const stlye = require('../styles/SHome')

class PendingScreen extends Component {

    static navigationOptions = {
        title :'Pendings'
    }


    render(){
        const { container} = stlye
        return (
            <View style={container}>
                <Text>Pendings Here</Text>
            </View>)
    }
}

export default PendingScreen