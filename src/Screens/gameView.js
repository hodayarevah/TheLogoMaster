import React, { Component } from 'react';
import {SafeAreaView, Text,View,ImageBackground,Image,ScrollView } from 'react-native';
import styles from "./MyStyle";
import {Row, Col} from 'react-native-easy-grid';
import { Button } from 'native-base';
import CountDown from 'react-native-countdown-component';
//import { Input,Item} from 'native-base';
//import CountDown from 'react-native-countdown-component';
import CharacterInput from 'react-native-character-input';
class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level:"",
        logoimg:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        logoname:"",
        userupd :[],
        stagepoints:"",
        len:["n","b","a"],
        guess:[],
        timer: 10,


    };

    const internal = setInterval(() => {
      if (this.state.timer <= 0 ) {
        clearInterval(internal)
      const {id} = this.props.route.params;
      const {points} = this.props.route.params;
      const {stage} = this.props.route.params;
      let newscore=stage+1
      this.state.userupd={
        Id:id,
       Points:points,
       UserStage:newscore,
      }
        alert('Finished!')
        this.postdata()
      } else {
        this.setState({timer: this.state.timer - 1})
      }
    }, 1000)
  
  }

 
  postdata=async()=>{
    

    const url = 'http://192.168.0.105:51342/api/Users/'
   const userdata= await fetch(url, {
      method: 'Delete',
      body: JSON.stringify(this.state.userupd),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    alert('level up!')
    this.props.navigation.navigate('gameView',{id:this.state.userupd.Id,points:this.state.userupd.Points,stage:this.state.userupd.UserStage})
 
    }


  async componentDidMount  (){
    
    const {stage} = this.props.route.params;
    this.setState({level:stage})
    const url = `http://192.168.0.105:51342/api/Logo?numStage=`+stage
    const lego = await fetch(url, {
       method:'Get',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
  const res= await lego.json()
  console.log(res);
   this.setState({logoimg:res.LogoImg,logoname:res.LogoName,len:res.LogoName.split("")})
  console.log(this.state.len);
  
  }

 
 // const {id} = this.props.route.params;
 // const {points} = this.props.route.params;
  //const {stage} = this.props.route.params;



 
  render() 
  {
  
  
    return (
      <ScrollView >

      <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
      <View >
      <Text style={styles.proftexts} > Stage {this.state.level} </Text>
      <Text style={styles.proftexts} > timer {this.state.timer} </Text>
     <Image style={style=styles.logoimage} source={{uri:this.state.logoimg}}/>  
     
      </View>
      <Row  style={style=styles.rowguss}>
     


      </Row>
      <Button rounded style={styles.butnx}  onPress={() => this.props.navigation.navigate('newuser')}>
            <Text style={styles.words}> </Text>
          
            </Button>
      </ImageBackground>
      </ScrollView>
    );
  }
}

export default gameView;


