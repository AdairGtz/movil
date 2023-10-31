import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenTemplate from '../screenTemplate'
import { Button, Icon, Image, Input } from '@rneui/themed'
import { ScrollView } from 'react-native'

const lockHiddenImg = require("../../../assets/lockHidden.png")

const NewPassword = () => {
        return (
                <ScreenTemplate>
                        <View style={styles.container}>
                                <ScrollView keyboardDismissMode='interactive' contentContainerStyle={{ alignItems: 'center' }}>
                                        <Text style={styles.title}>Crea una nueva contraseña</Text>
                                        <Image source={lockHiddenImg} style={{ width: 250, height: 80 }} />
                                        <Text style={styles.text}>Crea una nueva contraseña para poder acceder a tu cuenta</Text>
                                        <Input leftIcon={<Icon name='lock' />} placeholder='Contraseña' containerStyle={styles.inputs} />
                                        <Input leftIcon={<Icon name='lock' />} placeholder='Confirmar contraseña' containerStyle={styles.inputs} />
                                        <Button title='Enviar' color='#00A36E' containerStyle={styles.buttonSubmit} />
                                </ScrollView>
                        </View>
                </ScreenTemplate>
        )
}

const styles = StyleSheet.create({
        container: {
                width: '90%',
                marginTop: 20,
                height: '55%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                alignItems: 'center',
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 2,
                },
                elevation: 2,
        },
        title: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
        },
        inputs: {
                height: 55
        },
        text: {
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
        },
        buttonSubmit: {
                width: '80%',
                marginTop: 20,
                borderRadius: 20,
        }
})

export default NewPassword