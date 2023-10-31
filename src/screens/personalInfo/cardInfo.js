import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'

const CardInfo = ({ title, image, description }) => {
        return (
                <View style={styles.container}>
                        <View style={styles.boxImage}>
                                <Image source={image} style={styles.image} />
                        </View>
                        <View style={styles.information}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.description}>{description}</Text>
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                width: '100%',
                height: 60,
                flexDirection: 'row',
        },
        boxImage: {
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
        },
        title: {
                fontSize: 18,
        },
        description:{
                fontSize: 16,
                color: '#00A36E'
        },
        image: {
                width: 40,
                height: 40,
        },
        information: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
        }
})

export default CardInfo