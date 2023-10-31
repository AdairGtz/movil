import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ListItem from './listItem'
import { Image } from '@rneui/themed'
import { iconUser } from '../../utils/contants'


const Settings = () => {
        return (
                <View style={styles.container}>
                        <View style={styles.box}>
                                <Text style={styles.title}>Cuenta</Text>
                                <ListItem title="Perfil" to="/personalInformation" icon={iconUser} />
                                <Text style={styles.title}>Sonido y Apariencia</Text>
                                <ListItem title="Sonidos y Notificaciones" to="/personalInformation" icon={iconUser} />
                                <Text style={styles.title}>Legal</Text>
                                <ListItem title="Politicas de privacidad" to="/personalInformation" icon={iconUser} />
                                <ListItem title="Términos y condiciones" to="/personalInformation" icon={iconUser} />
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                marginTop: 20,
                alignItems: 'center',
        },
        box: {
                width: '90%',
                height: 'auto',
                alignItems: 'center',
                backgroundColor: '#FFF',
                padding: 10,
                borderRadius: 10,
                elevation: 2,
        },
        title: {
                width: '100%',
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                marginTop: 5,

        },
})

export default Settings