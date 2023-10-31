import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Icon, Image, Tab, TabView, CheckBox } from '@rneui/themed'
import { Link } from '@react-navigation/native'
import ScreenTemplate from '../screenTemplate'
const user = require('../../../assets/user.png')

const Login = () => {

        const [tabSelected, setTabSelected] = useState(0)
        const [checked, setChecked] = useState(false)

        return (
                <ScreenTemplate>
                        <View style={styles.containerTabs}>
                                <View style={{ backgroundColor: '#CCC', borderRadius: 30 }}>
                                        <Tab
                                                value={tabSelected}
                                                onChange={(e) => setTabSelected(e)}
                                                dense={true}
                                                titleStyle={{ color: '#FFF' }}
                                                containerStyle={{ borderRadius: 30 }}
                                                indicatorStyle={{ backgroundColor: '#00A36E', height: '100%', borderRadius: 30, zIndex: -1, width: '50%' }}
                                        >
                                                <Tab.Item title="Iniciar Sesión" color='primary' />
                                                <Tab.Item title="Registrarse" />
                                        </Tab>
                                </View>
                                <View style={styles.containerTabView}>
                                        <TabView value={tabSelected} onChange={setTabSelected} animationType='spring'>
                                                <TabView.Item style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={styles.boxLogin}>
                                                                        <Text style={styles.titleLogin}>Iniciar Sesión</Text>
                                                                        <Image source={user} style={{ width: 100, height: 100 }} />
                                                                        <Input leftIcon={<Icon name='email' />} placeholder='Correo' />
                                                                        <Input leftIcon={<Icon name='lock' type='fontawesome' />} placeholder='Contraseña' containerStyle={{ height: 55 }} />
                                                                        <Link to={{ screen: 'recover' }} style={{ width: '100%', padding: 0, color: '#00A36E', fontWeight: 'bold', fontSize: 14, textAlign: 'right', paddingRight: 10 }}>Olvide mi contraseña</Link>
                                                                        <Button title='Acceder' color='#00A36E' containerStyle={styles.submitButton} />
                                                                </View>
                                                        </ScrollView>
                                                </TabView.Item>
                                                <TabView.Item style={{ flex: 1 }}>
                                                        <ScrollView keyboardDismissMode='interactive'>
                                                                <View style={styles.boxRegister}>
                                                                        <Text style={styles.titleRegister}>Registrarme</Text>
                                                                        <Input leftIcon={<Icon name='email' type='fontawesome6' />} placeholder='Nombre' containerStyle={styles.inputs} />
                                                                        <Input leftIcon={<Icon name='email' type='fontawesome5' />} placeholder='Correo' containerStyle={styles.inputs} />
                                                                        <Input leftIcon={<Icon name='lock' type='fontawesome5' />} placeholder='Contraseña' containerStyle={styles.inputs} />
                                                                        <Input leftIcon={<Icon name='lock' type='fontawesome5' />} placeholder='Confirmar Contraseña' containerStyle={styles.inputs} />
                                                                        <CheckBox center title='Acepto las potliticas de privacidad' checked={checked} containerStyle={{ height: 30, padding: 0 }} onPress={() => setChecked(!checked)} />
                                                                        <Button title='Registrarme' color='#00A36E' containerStyle={styles.submitButton} />
                                                                </View>
                                                        </ScrollView>
                                                </TabView.Item>
                                        </TabView>
                                </View>
                        </View>
                </ScreenTemplate>
        )
}

const styles = StyleSheet.create({
        containerImage: {
                width: '100%',
                height: '80%',
                borderBottomEndRadius: 100,
                borderBottomLeftRadius: 100,
                borderBottomStartRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
        },
        box_title: {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                marginTop: 20,
                zIndex: 2
        },
        title: {
                fontSize: 30,
                fontWeight: 'bold',
                color: '#595959'
        },
        containerForm: {},
        box_input: {},
        inputIcon: {},
        label: {
                marginBottom: 5,
                fontWeight: 'bold',
                fontSize: 18,
                color: '#595959'
        },
        boxinformationAccount: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
        },
        textRegister: {
                color: '#00A36E',
                fontWeight: 'bold',
                fontSize: 14,
        },
        textRecover: {
                color: '#FF0000',
                fontWeight: 'bold',
                fontSize: 14,
        },
        submit: {},
        boxOtherAccount: {
                width: '100%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
        },
        titleOtherAccount: {
                fontSize: 14,
                fontWeight: 'bold',
                color: '#595959'
        },
        containerTabs: {
                width: '90%',
                marginTop: 20,
                height: '60%',
                backgroundColor: '#FFF',
                overflow: 'hidden',
                borderRadius: 20,
                zIndex: 2,
                padding: 10,
                elevation: 2,
        },
        boxLogin: {
                flex: 1,
                alignItems: 'center'
        },
        titleLogin: {
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
                fontWeight: 'bold',
        },
        containerTabView: {
                flex: 1,
                overflow: 'hidden',
        },
        submitButton: {
                width: '70%',
                borderRadius: 30,
                marginTop: 10,
        },
        boxRegister: {
                flex: 1,
                alignItems: 'center',
        },
        titleRegister: {
                fontSize: 20,
                marginBottom: 5,
                marginTop: 5,
                fontWeight: 'bold',
        },
        inputs: {
                height: 60
        }
})
export default Login