import React, { Component } from 'react';
import {SafeAreaView, Text,View,ImageBackground,Image } from 'react-native';
import styles from "./MyStyle";
import {Row, Col} from 'react-native-easy-grid';
import { Button } from 'native-base';
import { Input,Item} from 'native-base';
//import CountDown from 'react-native-countdown-component';
class gameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        level:"1",
        logoimg:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        logoname:"nba",
        time :"",
        stagepoints:"",
        len:["n","b","a"],
        gusse:[],

    };
  
  }


  async componentDidMount  (){
  
  }

 
 // const {id} = this.props.route.params;
 // const {points} = this.props.route.params;
  //const {stage} = this.props.route.params;



 
  render() 
  {
  
    const {stage} = this.props.route.params;
    return (
      <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
      <View >
      <Text style={styles.proftexts} > Stage {stage}</Text>

     <Image style={style=styles.logoimage} source={{uri:this.state.logoimg}}/>  
   
      </View>
      <Row>
      {(this.state.len.length) > 0 ? this.state.len.map(obj => <Col style={{marginLeft: "5%",maxWidth:"5%"}}>
      <Item  regular>
      <Input  key={obj} style={style=styles.box} maxLength={1} onChangeText={val=> this.state.gusse.push(val)}/> 
      </Item >
      </Col>) : null}
      </Row>
      <Button rounded style={styles.butnx}  onPress={() => this.props.navigation.navigate('newuser')}>
            <Text style={styles.words}> </Text>
          
            </Button>
      </ImageBackground>
    );
  }
}

export default gameView;


