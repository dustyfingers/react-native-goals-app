import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.pageContainer}>
      <View>
        <TextInput placeholder="Say something!" style={styles.textInput}/>
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 30
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
    marginTop: 30,
    paddingBottom: 10
  }
});
