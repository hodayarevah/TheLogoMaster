import React, { Component } from 'react';
import {SafeAreaView, ScrollView, Text,View ,ImageBackground} from 'react-native';
import NoteCard from './Logo';
import styles from "./MyStyle";
import { Icon,Avatar } from 'react-native-elements';
import { Button } from 'native-base';
class MyPageView extends Component {
    constructor(props) {
      super(props);
      this.state = {
         points:0,
         stage:0,
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

            <Avatar rounded size="large" source={require('../backb.png')}/>
            <Text style={styles.notetitle} > Hello {this.state.UserName} </Text>
            </View>
            <Text  > points  {this.state.points} </Text>
            <Text  > stage  {this.state.stage} </Text>
           <Button rounded style={styles.butn}  onPress={() =>this.props.navigation.navigate('gameView',{id:this.state.id,points:this.state.points,stage:this.state.stage})}>
           <Text  > let's Go  {this.state.stage} </Text>
             </Button>

</ScrollView>
  </SafeAreaView>
  </ImageBackground >
  );
  }

}
export default MyPageView;
