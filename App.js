import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import GoalItem from './src/components/GoalItem/GoalItem'
import GoalInput from './src/components/GoalInput/GoalInput.js'

import styles from './App.styles'

export default function App() {
    const [goals, setGoals] = useState([])

    const handleGoalAdd = enteredGoal => {
      const newGoal = { value: enteredGoal, key: Math.random() + Date.now() }
      console.log({newGoal})
      setGoals([...goals, newGoal])
    }

    const handleGoalDelete = goal => {
      const newGoals = goals.filter(item => item.key !== goal.key)
      console.log({goal})
      console.log({newGoals})
      setGoals(newGoals)
    }

    return (
        <View style={styles.pageContainer}>
            <GoalInput addGoal={handleGoalAdd} />
            <FlatList 
                data={goals} 
                renderItem={({item: {value, key}}) => <GoalItem onDelete={handleGoalDelete} value={value} key={key} />}
            />
        </View>
    )
}