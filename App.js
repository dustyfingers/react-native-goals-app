import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

import styles from './App.styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const handleGoalInputChange = inputText => setEnteredGoal(inputText)

  const handleAddGoalPress = () => {
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
      <View>
        {goals.map((goal, i)=> <Text key={i}>{goal}</Text>)}
      </View>
    </View>
  )
}