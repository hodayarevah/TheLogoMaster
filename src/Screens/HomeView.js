import React, { Component } from 'react';
import { Icon, Text ,Button} from 'native-base';
import { ImageBackground, Image } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import styles from "./MyStyle";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logolist:["apple"],
      name:[{LogoName:"apple",LogoImg:"https://help.apple.com/assets/5C2D31DA0946224012A6B385/5C2D345D0946227F55A6AEB2/en_US/0eb401f9019e0c90e1b7e49a38052daf.png"}],
      logo:"",
    };
  }

  letsgo=()=>{
  const url = `http://192.168.0.107:51342/api/Logo/`
  let data=this.state.name
  fetch(url, {
    method: 'Post',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })
  .then((res) => {
   alert("sucssess")
    return res.json(); 
  },(err) => {
    console.warn('error',err)
    alert("noooooo"+{err})
  })
  .catch(err => alert(err)) 
  
  
}
  render() {
    return (  

    
    <ImageBackground source= {require('../back.png')} style={styles.image}>
       
          
          <Image style={styles.king} source= {require('../king.gif')} />
          <Button  style={styles.butn} onPress={() => this.props.navigation.navigate('login')}>
          <Icon reverse style={styles.go}  name='play'  />
          <Text style={styles.words}> play </Text>
        
          </Button>
          <Button rounded style={styles.butn} onPress={this.letsgo}>
          <Text style={styles.words}> go </Text>
        
          </Button>

      </ImageBackground>
    
    );
  }
}



export default HomeView;
