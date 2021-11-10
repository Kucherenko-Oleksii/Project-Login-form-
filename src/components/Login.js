import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import Inputs from './Inputs';

export default function Login(){
    return(
        <SafeAreaView style = {styles.container}>
          <ScrollView>
                <Inputs />   
            <TouchableOpacity style = {styles.buttons}>
                    <Text style = {styles.text}>LogIn</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "lightpink",
        width: '90%',
        height: '70%',
        borderRadius: 10
        
    },
    buttons:
    {
        width: 80,
        height: 40,
        borderRadius: 5,
        marginLeft: '40%',
        backgroundColor: "lightblue",
        padding: 10,
        top: '50%'
    },
    text:
    {
        marginLeft: 10
    }
});


















