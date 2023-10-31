import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'
import { Icon, Image } from '@rneui/themed'

const ListItem = ({ icon, title, to, params = {} }) => {

        const navigation = useNavigation()

        return (

                <TouchableOpacity style={styles.boxLink} onPress={() => navigation.navigate(to, params)}>
                        <View style={styles.card}>
                                <Image source={icon} style={{ width: 30, height: 30 }} />
                                <Text style={styles.title}>{title}</Text>
                        </View>
                        <Icon name="right" type='antdesign' color='#00A36E' size={25} />
                </TouchableOpacity>
        )
}


const styles = StyleSheet.create({
        title: {
                fontSize: 16,
                color: '#000',
                marginLeft: 10,
        },
        boxLink: {
                width: '100%',
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                justifyContent: 'space-between',
        },
        card: {
                flexDirection: 'row',
                alignItems: 'center',
        }
})

export default ListItem