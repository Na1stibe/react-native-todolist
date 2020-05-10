import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput,Dimensions
,Platform } from 'react-native';

const {width,height} = Dimensions.get("window");
export default class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}> Won Seok to do</Text>
     <View style={styles.card}>
       <TextInput style={styles.input} placeholder={"New To Do"}/>
     </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7f00',
    alignItems: 'center',
  },
  title:{
    color: "#808080",
    fontSize: 30,
    marginTop: 50,
    fontWeight:"200",
    marginBottom: 30
  },
  card:{
    backgroundColor:"white",
    flex: 1,
    width: width-50,  
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
