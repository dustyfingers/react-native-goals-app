import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './GoalItem.styles.js'

const GoalItem = ({ key, value, onDelete }) => {
    return (
        <TouchableOpacity onPress={() => onDelete({ key, value })}>
            <View style={styles.listItem}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem