import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,Image,ImageBackground} from 'react-native';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class MyPageView extends Component {
    constructor(props) {
      super(props);
      this.state = {
         points:0,
         stage:1,
         id:0,
         UserName: "hodaya"
      };
    }
  componentDidMount(){
    //const UserName = this.props.route.params;
    //const url = `http://localhost:44321/api/Users_LM/`
   // fetch(url)
   // .then(response => response.json())
    //.then(res => {
     // console.log('res=', res);
       
    //});
   

//(error) => {
  //alert("noooo "+error)
 // console.log("err post=", error);
//};

}
  
  render()
  {
  return (
    <ImageBackground source= {require('../backb.png')} style={styles.image}>
    <SafeAreaView>
    <ScrollView >

            <View style={styles.noteViewtitlex}>

            <Image style={styles.ava} rounded size="large" source={{  uri:  'https://assets.brandfetch.io/f946b65b538b491.png', }}/>
            <Text style={styles.notetitle} > Hello {this.state.UserName} </Text>
            </View>
            <Text  style={styles.proftext}  > points : {this.state.points} </Text>
            <Text  style={styles.proftext}  > stage : {this.state.stage} </Text>
           <Button  style={styles.butn}  onPress={() =>this.props.navigation.navigate('gameView',{id:this.state.id,points:this.state.points,stage:this.state.stage})}>
           <Text style={styles.words} > let's Go </Text>
             </Button>

</ScrollView>
  </SafeAreaView>
  </ImageBackground >
  );
  }

}
export default MyPageView;
