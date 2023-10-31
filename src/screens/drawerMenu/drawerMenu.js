import { View, Text } from 'react-native'
import React from 'react'
import { Button, Icon, Image } from '@rneui/themed'
import { Link } from '@react-navigation/native'
import { styles } from '../../styles/drawerMenu.style'
import { iconCreditCard, iconEmail, iconLock, iconUser } from '../../utils/contants'
const UserProfile = require("../../../assets/PerfilUser.png")

const DrawerMenu = ({ navigation }) => {
        const handlePress = () => {
                navigation.navigate(to)
        }

        return (
                <View style={styles.container}>
                        <View style={styles.containerProfile}>
                                <Image source={UserProfile} style={{ width: 100, height: 100 }} />
                                <Text style={styles.name}>Kevin Francisco Mina Martinez</Text>
                                <Text style={styles.email}>ejemplo@gmail.com</Text>
                        </View>
                        <View style={styles.containerInformation}>
                                <View style={styles.item}>
                                        <Image source={iconUser} style={{ width: 25, height: 25 }} />
                                        <Link to={{ screen: 'personalinfo' }}>Datos personales</Link>
                                </View>
                                <View style={styles.item}>
                                        <Icon name='home' type='fontawesome' size={20} color='#00A36E' />
                                        <Link to={{ screen: 'home' }}>Domicilio</Link>
                                </View>
                                <View style={styles.item}>
                                        <Image source={iconLock} style={{ width: 25, height: 25 }} />
                                        <Link to={{ screen: 'home' }}>Seguridad</Link>
                                </View>
                                <View style={styles.item}>
                                        <Image source={iconCreditCard} style={{ width: 25, height: 25 }} />
                                        <Link to={{ screen: 'home' }}>Métodos de pago</Link>
                                </View>
                                <View style={styles.item}>
                                        <Image source={iconEmail} style={{ width: 25, height: 25 }} />
                                        <Link to={{ screen: 'home' }}>Mensajes</Link>
                                </View>
                                <View style={styles.item}>
                                        <Image source={iconLock} style={{ width: 25, height: 25 }} />
                                        <Link to={{ screen: 'home' }}>Tema</Link>
                                </View>
                                <View>
                                        <Button icon={<Image source={iconLock} style={{ width: 20, height: 20, marginRight: 20 }} />} title='Salir' color='red' containerStyle={{ width: 140, marginTop: 20, justifyContent: 'center', borderRadius: 20 }} />
                                </View>
                        </View>
                </View>
        )
}


export default DrawerMenu