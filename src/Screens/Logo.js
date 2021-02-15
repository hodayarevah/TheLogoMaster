import React, { Component } from 'react';
import { Image,Text,View } from 'react-native';
import styles from "./MyStyle";
import { Icon,Card } from 'react-native-elements';


const Logo = (props) =>{
    const {id} = props;

    return (


            <View style={styles.user}>
                  

                  <Image style={styles.imgcard} source={{uri:Note.NoteImage}} />
          
                 
              
                  <Text style={styles.notecomments}>{Note.NoteText} </Text>
                  <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />

                  <Icon raised name='delete'  onPress={()=>ClickEvent(Note)}/>
            </View>
      
   
  );
}
export default Logo;

