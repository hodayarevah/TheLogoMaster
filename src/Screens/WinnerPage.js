import React, { Component } from 'react';
import { StyleSheet, View,ScrollView  } from 'react-native';
import { Table,TableWrapper, Row, Rows } from 'react-native-table-component';
 
export default class WinnerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  UserName:"",
    //  UserStage:"",
     // UserPoints:"",
      data: [],
    }
  }


  async componentDidMount() {

    const url = `http://192.168.1.16:55083/api/Users/`
    const userf =await fetch(url, {
        method: 'Get',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      
   const res=await userf.json()

        if(res != null)
          {
           alert("sucssess")
           let players = res.map(player => {
          return 
           {
            [
              player.UserName,
              player.Points,
              player.UserStage 
           ]
          }
          
      });

        this.setState({data: players} );
      
      };
     

  (error) => {
    alert("noooo "+error)
    console.log("err post=", error);
  };

  }

 
  render() {
    const state = this.state;
    tableHead= ['name', 'Points', 'UserStage'];
    const widthArr = [70, 60, 30, 50, 40, 40, 40];
    return (
      <View style={styles.container}>
         <ScrollView horizontal={true}>
         <View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.text}/>
        </Table>
        <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  <Rows data={state.data} flexArr={[1, 2, 1, 1]} widthArr={widthArr} style={styles.head}
                      textStyle={styles.text}/>
             </Table>
      </ScrollView>
        </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  dataWrapper: { marginTop: -1 }
});