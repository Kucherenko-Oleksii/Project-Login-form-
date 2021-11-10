import React from "react";
import { TextInput, StyleSheet, SafeAreaView, ScrollView } from "react-native";


export default function Inputs(){
    return(
        <SafeAreaView>
            <TextInput 
                style = {styles.textinputs}
                placeholder = "Enter your First Name"                        
            />   
            <TextInput 
                style = {styles.textinputs}
                placeholder = "Enter your Last Name"         
           />
            <TextInput 
                style = {styles.textinputs}
                placeholder = "Enter your Password"  
                secureTextEntry = {true}
            />
            <TextInput 
                style = {styles.textinputs}
                placeholder = "Enter your email address"  
            />
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    textinputs:
    {
        top: '5%',
        width: '65%',
        height: '15%',
        marginLeft: 10,
        margin: '5%',
        borderBottomWidth: 1,
        borderRadius: 2,
        paddingLeft: 4
        
        
    }
});