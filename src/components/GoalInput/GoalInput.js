import React, { useState } from 'react'
import { TextInput, Button, View } from 'react-native'

import styles from './GoalInput.styles.js'

const GoalInput = ({setGoals, goals}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleGoalInputChange = inputText => setEnteredGoal(inputText)

    const handleAddGoalPress = () => {
      if (enteredGoal === '') return
  
      setGoals([...goals, { value: enteredGoal, key: Math.random().toString() + Date.now() }])
      setEnteredGoal('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Say something!" 
                value={enteredGoal} 
                style={styles.textInput}
                onChangeText={handleGoalInputChange}/>
            <Button title="Add" onPress={handleAddGoalPress}/>
        </View>
    )
}

export default GoalInput
