import React from 'react'
import { Text, View } from 'react-native'

import styles from './GoalItem.styles.js'

const GoalItem = ({value}) => {
    return (
        <View style={styles.listItem}>
            <Text>{value}</Text>
        </View>
    )
}

export default GoalItem