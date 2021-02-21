import React, { Component } from 'react';
import {SafeAreaView, Text,View,ImageBackground,Image } from 'react-native';
import styles from "./MyStyle";
import {Row, Col} from 'react-native-easy-grid';
import { Button } from 'native-base';
//import { Input,Item} from 'native-base';
//import CountDown from 'react-native-countdown-component';
import CharacterInput from 'react-native-character-input'
class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level:"",
        logoimg:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        logoname:"",
        time :"",
        stagepoints:"",
        len:[],
        gusse:[],

    };
  
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
      <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
      <View >
      <Text style={styles.proftexts} > Stage {this.state.level}</Text>

     <Image style={style=styles.logoimage} source={{uri:this.state.logoimg}}/>  
   
      </View>
      <Row  style={style=styles.rowguss}>
     
      <CharacterInput
	placeHolder='__'
	showCharBinary='11'
	handleChange={(value) =>alert(value)}
	inputType='contained'
	keyboardType='default'
/>

      </Row>
      <Button rounded style={styles.butnx}  onPress={() => this.props.navigation.navigate('newuser')}>
            <Text style={styles.words}> </Text>
          
            </Button>
      </ImageBackground>
    );
  }
}

export default gameView;


