import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('handlePress called!')
  }
  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Say something!" style={styles.textInput}/>
        <Button title="Add" onPress={handlePress}/>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
    marginTop: 30,
    paddingBottom: 10
  }
});
