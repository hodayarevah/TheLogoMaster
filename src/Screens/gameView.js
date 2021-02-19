import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View,ImageBackground,Image } from 'react-native';
import NoteCard from './Logo';
import styles from "./MyStyle";
import { Icon } from 'react-native-elements';
import { Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from './Logo';
import CountDown from 'react-native-countdown-component';
class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level:"",
        logoimg:"",
        logoname:"",
        time :"",
        stagepoints:"",
        len:[],


    };
  
  }


  async componentDidMount  (){
  
  const {stage} = this.props.route.params;
  const url = `http://192.168.0.107:51342/api/Logo/`+ stage+"/"
  const lego = await fetch(url, {
     method: 'Get',
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })
const res= await lego.json()
this.setState({logoimg:res.LogoImg,logoname:res.LogoName,len: res.logoname.split("")})
alert("sucssess")
console.log(this.state.logoimg);
  }

 
 // const {id} = this.props.route.params;
 // const {points} = this.props.route.params;
  //const {stage} = this.props.route.params;

}

 
  render() 
  {
  
    const {stage} = this.props.route.params;
    return (
      <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
      <View >
     <Text style={styles.proftexts} > Stage {stage}</Text>
     <CountDown
        until={60 * 1 + 30}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#5271ff'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'M', s: 'S'}}
      />

     <Image  source={{uri:this.state.logoimg}}/>  
     {this.state.len!== null ? this.state.len.map(obj => <Col style={{marginLeft: "5%",maxWidth:"5%"}}><Logo/></Col>) : null}
         
      </View>

      
      <Button rounded style={styles.butnx} onPress={() => this.props.navigation.navigate('newuser')}>
            <Text style={styles.words}> </Text>
          
            </Button>
      </ImageBackground>
    );
  }
}

export default gameView;


