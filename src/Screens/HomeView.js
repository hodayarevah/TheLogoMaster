import React, { Component } from 'react';
import { Icon, Text ,Button} from 'native-base';
import { ImageBackground, Image } from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import styles from "./MyStyle";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logolist:[],
      name:["apple"],
      logo:"",
    };
  }

  letsgo=()=>{

    this.state.name.forEach(element => {

    var myHeaders = new Headers();
myHeaders.append("x-api-key", "Ak26dTKXRM82dP3iS5Jq796Ncd3At98G6IzS7X8z");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"domain":"www."+element+".com"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.brandfetch.io/v1/logo", requestOptions)
 .then((response) => response.text())
 .then((result) => {
   console.log(result)
    this.setState.logo=({
      logoName:{element},
     logoImg:result.icon.image,

    })
    this.setState.logolist.push(logo)
    })
    
  
  .catch(error => console.log('error', error));
      
    });

    this.postdata()

  }


postdata=()=>
{
  const url = `http://localhost:44321/api/Logo_LM/`
  let data=this.state.logolist
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({data}),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })
  .then((res) => {
   alert("sucssess")
    return res.json(); 
  }),
  (error) => {
    alert("noooo "+error)
    console.log("err post=", error);
  };
}
  render() {
    return (  

    
    <ImageBackground source= {require('../back.png')} style={styles.image}>
       
          <Text style={styles.text}>Logo Master</Text>
          <Image style={styles.king} source= {require('../king.gif')} />
          <Button rounded style={styles.butn} onPress={() => this.props.navigation.navigate('login')}>
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
