import React, { useState } from 'react'
import { Text, View, TextInput, Button, FlatList } from 'react-native'

import styles from './App.styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleGoalInputChange = inputText => setEnteredGoal(inputText)

  const handleAddGoalPress = () => {
    if (enteredGoal === '') return;

    setGoals([...goals, { value: enteredGoal, key: Math.random().toString() + Date.now() }])
    setEnteredGoal('')
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Say something!" 
          value={enteredGoal} 
          style={styles.textInput}
          onChangeText={handleGoalInputChange}/>
        <Button title="Add" onPress={handleAddGoalPress}/>
      </View>
      <FlatList 
        data={goals} 
        renderItem={({item: {value}}) => (
          <View style={styles.listItem}>
            <Text>{value}</Text>
          </View>
        )}
      />
    </View>
  )
}