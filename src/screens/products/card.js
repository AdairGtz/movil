import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useCallback } from 'react'
const screenWidth = Dimensions.get('window').width;

const Card = ({ item }) => {

        return (
                <View key={item.key} style={styles.containerCard}>
                        <Text>{item.name}</Text>
                </View>
        )
}


const styles = StyleSheet.create({
        containerCard: {
                width: (screenWidth / 2) - 15,
                padding: 10,
                height: 200,
                borderWidth: 1,
                borderColor: '#C0C0C0',
        },
})
export default Card