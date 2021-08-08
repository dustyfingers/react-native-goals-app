import React, { useState } from 'react'
import { Text, View, TextInput, Button, ScrollView } from 'react-native'

import styles from './App.styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleGoalInputChange = inputText => setEnteredGoal(inputText)

  const handleAddGoalPress = () => {
    if (enteredGoal === '') return;
    
    setGoals([...goals, enteredGoal])
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
      <ScrollView>
        {goals.map((goal, i) => (
          <View style={styles.listItem} key={i}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}