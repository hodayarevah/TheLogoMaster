import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class endgame extends Component {
    constructor(props) {
      super(props);
      this.state = {
         id:0,
         
      };
    }
render() {
    return (  

    
    <ImageBackground source= {require('../backe.png')} style={styles.image}>
     
     
        <Image style={styles.king} source= {require('../fire.gif')} />


        <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('mypro')}
>
          <Text style={styles.words}> winners table</Text>
        
          </Button>

      </ImageBackground>
    
    );
  }
}

export default endgame