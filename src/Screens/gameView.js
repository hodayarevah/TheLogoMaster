import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View,ImageBackground } from 'react-native';
import NoteCard from './Logo';
import styles from "./MyStyle";
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    UserId:this.props.route.params,

    };
  
  }




 
  render() {
   
    return (
      <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
      <View style={styles.login} >
     
  
     <Text> stage {this.state.stage}</Text>
       
  
      </View>

      
      <Button rounded style={styles.butnx} onPress={() => this.props.navigation.navigate('newuser')}>
            <Text style={styles.words}> New Player</Text>
          
            </Button>
      </ImageBackground>
    );
  }
}

export default gameView;


