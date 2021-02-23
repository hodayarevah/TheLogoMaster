import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class nextlevel extends Component {
    constructor(props) {
      super(props);
      this.state = {
         id:0,
         
      };
    }
render() {
    return (  

    
    <ImageBackground source= {require('../bacf.png')} style={styles.image}>
     
     
       
       <View style={styles.butnext}>

        <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('gameView',{id:this.props.id,points:this.props.points,stage:this.props.stage,UserName:this.props.UserName,imgU:this.props.img})}
>
          <Text style={styles.words}>next level</Text>
        
          </Button>
          <Button rounded style={styles.butn} onPress={() =>this.props.navigation.navigate('mypro',{UserId:this.props.id,pointsU:this.props.points,stageU:this.props.stage,UserName:this.props.UserName,imgU:this.props.img})}>

          <Text style={styles.words}>my profile</Text>
        
          </Button>
          </View>
      </ImageBackground>
    
    );
  }
}

export default nextlevel

 