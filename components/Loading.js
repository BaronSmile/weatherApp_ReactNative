import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Loading() {
  return <View style={styles.container}>
    <StatusBar style="auto"/>
    <Text style={styles.text}>Hello world!!!</Text>
    <Text style={styles.text}>Загрузка погоды...</Text>
  </View>
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#f5af19",
  },
  text:{
    color: "#2c2c2c",
    fontSize: 22,
  }
})