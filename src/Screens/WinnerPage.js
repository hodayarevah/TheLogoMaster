import React, { Component } from 'react';
import { StyleSheet, View,ScrollView  } from 'react-native';
import { Table,TableWrapper, Row, Rows } from 'react-native-table-component';
import {ImageBackground } from 'react-native';

import styles from "./MyStyle";
export default class WinnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  UserName:"",
    //  UserStage:"",
     // UserPoints:"",
     tableData: [],
    }
  }


  async componentDidMount() {

    const url = `http://192.168.0.105:51342/api/Users/`
    const userf =await fetch(url, {
        method: 'Get',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      
   const res=await userf.json()
    let i=0;
    const Data = [];
        if(res != null)
          {
           alert("sucssess")
           let rowData = [];
          res.forEach(element => {
              i++;
              rowData.push([i],[element.UserName],[element.Points], [element.UserStage]);
              Data.push(rowData);
              rowData = []
              
            });
            
    this.setState({tableData: Data} );
        }
    
      };

 
  render() {
    const state = this.state;
    tableHead= ['place','name', 'Points', 'UserStage'];
    const widthArr = [70, 60, 30, 50, 40, 40, 40];
    return (
      <ImageBackground source= {require('../backh.png')} style={styles.image}>
      <View style={styles.containerh}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.headh} textStyle={styles.texth}/>
          <Rows data={state.tableData} textStyle={styles.texth}/>
        </Table>

      </View>
      </ImageBackground>
    )
  }
}
