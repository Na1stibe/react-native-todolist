import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform} from "react-native";
//TouchableOpacity = rn touch event view
// class component 수정하기 위해 사용
const {width,height} = Dimensions.get("window");

export default class ToDo extends React.Component{
    state = {
       Editing: false,
       Completed: false
    };
    render(){
        const {Completed} = this.state;
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this.toggleCompleted}>
                <View style={[styles.Circle, 
                    Completed ? styles.CompletedCircle : styles.unCompletedCircle]}></View>
            </TouchableOpacity>
            <Text style={{
            color: '#e74c3c',
             fontSize: 14,
              paddingLeft: 5}}>hi</Text>
        </View>
        );
    }
    toggleCompleted = () => {
        this.setState(prevState => {
            return{
                Completed: !prevState.Completed
            };
        });
    };
}

const styles = StyleSheet.create({
    container: {
        width: width-50,
        borderBottomColor: "#808080",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems:"center",
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:3,
        marginRight:20,
        marginLeft:8
    },
    CompletedCircle:{
        borderColor:"green"
    },
    unCompletedCircle:{
        borderColor:"red"
    },
    text:{
        fontWeight:"600",
        fontSize:20,
        marginVertical:20
    }
})