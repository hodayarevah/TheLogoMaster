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
        time :"",
        stagepoints:"",
        len:["n","b","a"],
        guess:[],
        timer: 180

    };

    const internal = setInterval(() => {
      if (this.state.timer <= 0) {
        clearInterval(interval)
        alert('Finished!')
      } else {
        this.setState({timer: this.state.timer - 1})
      }
    }, 1000)
  
  }


  async componentDidMount  (){
    
    const {stage} = this.props.route.params;
    this.setState({level:stage})
    const url = `http://192.168.1.101:51342/api/Logo/`
    const lego = await fetch(url, {
       method: 'Put',
       body: JSON.stringify(stage),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
  const res= await lego.json()
  console.log(res);
   this.setState({logoimg:res.LogoImg,logoname:res.LogoName,len: res.logoname.split("")})
  alert("sucssess")
  console.log(this.state.logoimg);
  
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
      <Text style={styles.proftexts} > Stage {this.state.level} {this.state.timer}</Text>

     <Image style={style=styles.logoimage} source={{uri:this.state.logoimg}}/>  
     
      </View>
      <Row  style={style=styles.rowguss}>
     
      <CharacterInput
	placeHolder={Array(this.state.len.length).fill('_').join('')}
	showCharBinary={Array(this.state.len.length).fill('1').join('')}
	handleChange={(guess) => { this.setState({guess}) }}
	inputType='contained'
	keyboardType='default'
/>

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


