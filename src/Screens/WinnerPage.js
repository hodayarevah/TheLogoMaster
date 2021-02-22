import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
export default class WinnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName:"",
      UserStage:"",
      UserPoints:"",
      tableHead: ['Place', 'User Name', 'Stage', 'Points'],
      tableData: [  ]
    }
  }


   componentDidMount = () => {

    const url = `http://192.168.1.16:55083/api/Users/`
    const userf = await fetch(url, {
        method: 'Get',
        body:'',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      
      const res= await userf.json()

        if(res != null)
          {
           alert("sucssess")
           let all=[]
           res.forEach(element => {
      
   
         ['1',this.state.UserName,this.state.UserStage,this.state.UserPoints],
   
          
        });

    
      
      };
     

  (error) => {
    alert("noooo "+error)
    console.log("err post=", error);
  };

  }

 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});