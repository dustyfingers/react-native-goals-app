import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

import GoalItem from './src/components/GoalItem/GoalItem'
import GoalInput from './src/components/GoalInput/GoalInput.js'

import styles from './App.styles'

export default function App() {
    const [goals, setGoals] = useState([])

    return (
        <View style={styles.pageContainer}>
            <GoalInput />
            <FlatList 
                data={goals} 
                renderItem={({item: {value}}) => <GoalItem value={value}/>}
            />
        </View>
    )
}