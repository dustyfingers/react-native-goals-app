import React, { useState } from 'react'
import { TextInput, Button, View } from 'react-native'

import styles from './GoalInput.styles.js'

const GoalInput = ({addGoal, goals}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const handleGoalInputChange = inputText => setEnteredGoal(inputText)

    const handleAddGoalPress = () => {
      if (enteredGoal === '') return
  
      addGoal(enteredGoal)
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
