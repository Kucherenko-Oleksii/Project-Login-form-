import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import Login from './src/components/Login';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.text}>Login form</Text>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:
  {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
