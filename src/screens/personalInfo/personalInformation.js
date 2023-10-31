import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed'
import CardInfo from './cardInfo'
import { iconCalendary, iconHappyBirthday, iconUser } from '../../utils/contants'

const user = require("../../../assets/PerfilUser.png")

const PersonalInformation = ({ navigation }) => {
        return (
                <ScrollView style={{ flex: 1, backgroundColor: '#DBEFED' }}>
                        <View style={styles.container}>
                                <View style={styles.card}>
                                        <Text style={styles.title}>Perfil</Text>
                                        <Image source={user} style={{ width: 100, height: 100 }} />
                                        <Text style={styles.userName}>Kevin Francisco Mina Martinez</Text>
                                        <Text style={styles.emailUser}>ejemplo@gmail.com</Text>
                                        <View style={styles.boxListInfo}>
                                                <CardInfo
                                                        title="Nombre"
                                                        description="Kevin Francisco"
                                                        image={iconUser}
                                                />
                                                <CardInfo
                                                        title="Apellido Paterno"
                                                        description="Mina"
                                                        image={iconUser}
                                                />
                                                <CardInfo
                                                        title="Apellido Materno"
                                                        description="Martinez"
                                                        image={iconUser}
                                                />
                                                <CardInfo
                                                        title="Fecha de Nacimiento"
                                                        description="08/02/2001"
                                                        image={iconCalendary}
                                                />
                                                <CardInfo
                                                        title="Edad"
                                                        description="22"
                                                        image={iconHappyBirthday}
                                                />
                                        </View>
                                        <Button title='Editar datos' color='#00A36E' containerStyle={{ width: '60%', borderRadius: 30 }} onPress={() => navigation.navigate('editPersonalInfo')} />
                                </View>
                        </View>
                </ScrollView>
        )
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                alignItems: 'center',
        },
        card: {
                width: '95%',
                height: 'auto',
                backgroundColor: '#FFF',
                borderRadius: 10,
                padding: 10,
                marginVertical: 20,
                elevation: 2,
                alignItems: 'center',
                rowGap: 10
        },
        boxListInfo: {
                width: '100%',
                height: 'auto',
        },
        title:{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10
        },
        userName:{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10
        },
        emailUser:{
                fontSize: 16,
                marginTop: -20,
                color: '#00A36E',
        }
})
export default PersonalInformation