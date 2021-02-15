  
import React, { Component } from "react";
import { Container } from "native-base";
import { StyleSheet, Image, ScrollView, Keyboard } from "react-native";
import AddImage from "../Components/AddImage";
import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import * as ImagePicker from "expo-image-picker";
import React, {Component} from 'react';
import {Image,View } from 'react-native';
import { Button, Text,Item,Form,Input, Label, Icon, Thumbnail } from 'native-base';
import styles from "./MyStyle";
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewUserName:"",
      NewUserPass:"",
      VerPass:"",
      points:0,
      stage:0,
      img:"",

    };

  }

  openGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    
    console.log(result);

    if (!result.cancelled) {
      this.setState({ img: result.uri, imgBase64: result.base64 });
    }
  };

  SubmitNew =()=>{

    if (this.state.NewUserPass!= this.state.VerPass)
    {
      alert("the password dose not match try agin")
    }
else{
 const user=({
    UserName: this.state.NewUserName,
    UserPass:this.state.NewUserPass,
    points:this.state.points,
    stage:this.state.stage,
    img:this.state.img
   })

  const url = `http://localhost:44321/api/Users_LM/`
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({user}),
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

    this.setState({
      NewUserName:"",
      NewUserPass:"",
      VerPass:"",
      
    });
      this.props.navigation.goBack();
    }
  }





  
  render() {
 
    const {navigation} = this.props

    return (
      <>
            <View style={styles.noteViewtitle}>
            <Text style={styles.notetitle} > Add new user </Text>
            </View>
            <Form style={{paddingTop:'20%'}}>
             <Item floatingLabel  > 
             <Label>Insert your name</Label>
                <Input onChangeText={newname=> this.setState({NewUserName: newname})}/>
             </Item>
             <Item floatingLabel  > 
             <Label>Insert your password</Label>
             <Input  onChangeText={Info=> this.setState({NewUserPass: Info})} />
             </Item>
             <Item floatingLabel  > 
             <Label>verify password</Label>
             <Input  onChangeText={Info=> this.setState({VerPass: Info})} />
             </Item>
             {this.state.img ? <Image
                  style={stylesCP.image}
                  source={{uri: `data:image/gif;base64,${this.state.img}`}}
                ></Image> : null}
        <AddImage parent={this}  openGallery={this.openGallery} nav={this.props.navigation} saveNote={this.saveNote} deleteNote={this.deleteNote}/>
        
            </Form>        
              <Button style={styles.SubmitBtn} onPress={this.SubmitNew} >
               <Text>Submit</Text>
              </Button>
             
     

</>
    );
   }
  }

export default NewUser;




