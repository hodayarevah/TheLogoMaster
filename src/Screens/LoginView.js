import React from 'react';
import {SafeAreaView, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Item, Text, View } from 'native-base';
import { ImageBackground } from 'react-native';
import styles from "./MyStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
class  LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName:"hodaya",
      UserPass:"revah",
      UserId:"",

    };
  }

  
  
  SubmitNote = async() =>{
 let  name=this.state.UserName;
 let pass=this.state.UserPass ;
  if((name === '')||(pass === ''))
   {
        alert("Please insert info!")
    }
    else{
    
      const url = `http://192.168.1.101:51342/api/Users/`
      const userf = await fetch(url, {
          method: 'Put',
          body:   JSON.stringify([name, pass]),
          headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
          })
        })
        
        const res= await userf.json()
          if(res.UserName != null)
            {
             this.props.navigation.navigate('gameView');
           };
          
            
          //this.props.navigation.navigate('MyPageView',{UserId:item.UserId})
           // res.forEach((item) => {
              //if (item.UserName===name && item.UserPass===pass )
             // {
             // 
               
             // }
             
           // });
        

       

    }
  }


  render()
  {

   return(
    <ImageBackground source= {require('../backb.png')} style={styles.image}>
   
    <View style={styles.login} >
   

<Input  onChangeText={Info=> this.setState({UserName: Info})}
  placeholder='User Name'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
     />
  }
/>


<Input placeholder="Password" secureTextEntry={true}   onChangeText={InputTitle=> this.setState({UserPass: InputTitle})}/>

          <Button rounded style={styles.butn} onPress ={this.SubmitNote}>
        
               <Text style={styles.words}>Log in</Text>
              </Button>
            

    </View>

    
    <Button rounded style={styles.butnx} onPress={() => this.props.navigation.navigate('newuser')}>
          <Text style={styles.words}> New Player</Text>
        
          </Button>
    </ImageBackground>
   );
  }
}

  

  
export default LoginView;
  