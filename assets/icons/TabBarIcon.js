import React from 'react';
import { Feather, AntDesign, Ionicons, Entypo,
   SimpleLineIcons, MaterialIcons, Octicons,EvilIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    const size = this.props.size ? this.props.size : 26
    const name = this.props.name
    const focusing = this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
    switch(this.props.brand){
      case 'AntDesign':
        return(<AntDesign
          name={name}
          size={size}
          style={{ marginBottom: -3 }}
          color={focusing}
          />)
      case 'Feather' :
        return(<Feather
            name={name}
            size={size}
            style={{ marginBottom: -3 }}
            color={focusing}
          />)  
      case 'Entypo':
      return(<Entypo
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={focusing}
      />)
      case "SimpleLineIcons": 
      return(<SimpleLineIcons
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={focusing}
      />)
      case 'MaterialIcons':
      return(<MaterialIcons
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={this.props.focusBack ? this.props.focusBack : focusing}
      />)
      case 'Octicons':
      return(<Octicons
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={focusing}
      />)
      case 'EvilIcons':
      return(<EvilIcons
        name={name}
        size={size}
        style={{ marginBottom: -3 }}
        color={focusing}
      />)
      default :
        return(<Ionicons
          name={name}
          size={size}
          style={{ marginBottom: -3 }}
          color={focusing}
        />)
        }
      }
}