import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Icon, Image } from '@rneui/themed'
import PlantsIcon from '../icons/plants'
import ShoppingCartIcon from '../icons/shoppingCart'
import Products from '../screens/products/products'
import ShoppingCart from '../screens/shoppingCart/shoppingCart'
import { styles, tabBarActiveTintColor, tabBarInactiveTintColor } from '../styles/tabs.style'
import Settings from '../screens/settings/settings'
import PersonalInformation from '../screens/personalInfo/personalInformation'
import { Text } from 'react-native'
import { LOGO } from '../utils/contants'
import ProductDetail from '../screens/productDetail/productDetail'
import HomeScreen from '../screens/home/home'
const logoImg = require("../../assets/logo_icon.png")
const UserProfile = require("../../assets/PerfilUser.png")
const config = {
        animation: 'spring',
        config: {
                stiffness: 1000,
                damping: 500,
                mass: 3,
                overshootClamping: true,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
        },
};

const TabsHeader = () => {

        const Tabs = createBottomTabNavigator()

        return (
                <Tabs.Navigator
                        screenOptions={{
                                tabBarStyle: styles.tabBarStyle,
                                tabBarInactiveTintColor,
                                tabBarActiveTintColor,
                        }}
                >
                        <Tabs.Screen name="home" component={HomeScreen}
                                options={({ route, navigation }) => ({
                                        title: '',
                                        headerShown: true,
                                        tabBarLabel: 'Inicio',
                                        tabBarIcon: ({ color, size }) => (
                                                <Icon name="home" type='antdesign' color={color} size={size} />
                                        ),
                                        headerTintColor: '#FFF',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerLeft: () => (
                                                <Button
                                                        icon={<Icon name='menu' style={{ width: 30, height: 30 }} color='#FFF' />}
                                                        color='transparent'
                                                        onPress={() => navigation.openDrawer()}
                                                />
                                        ),
                                        headerRight: () => (
                                                <Button
                                                        icon={<Image source={UserProfile} style={{ width: 30, height: 30 }} />}
                                                        color='transparent'
                                                        onPress={() => navigation.navigate('login')}
                                                />
                                        ),
                                        headerTitleAlign: 'center',
                                        headerTitle: () => (
                                                <Image source={LOGO} style={{ width: 35, height: 45 }} />
                                        )
                                })}
                        />
                        <Tabs.Screen name="tienda" component={Products}
                                options={{
                                        tabBarLabel: 'Tienda',
                                        headerLeft: () => (
                                                <Image source={logoImg} style={{ width: 30, height: 30 }} />
                                        ),
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        tabBarIcon: ({ color, size }) => (
                                                <PlantsIcon color={color} size={size} />
                                        )
                                }}
                        />
                        <Tabs.Screen name="shoppingcart" component={ShoppingCart}
                                options={{
                                        title: '',
                                        tabBarLabel: 'Carrito',
                                        tabBarIcon: ({ color, size }) => (
                                                <ShoppingCartIcon color={color} size={size} />
                                        )
                                }}
                        />
                        <Tabs.Screen name="settings" component={Settings}
                                options={{
                                        title: '',
                                        tabBarLabel: 'Configuración',
                                        headerLeft: () => (
                                                <Image source={logoImg} style={{ width: 30, height: 30 }} />
                                        ),
                                        tabBarIcon: ({ color, size }) => (
                                                <Icon name="settings" color={color} size={size} type='feather' />
                                        )
                                }}
                        />
                        <Tabs.Screen name="personalinfo" component={PersonalInformation}
                                options={({ route, navigation }) => ({
                                        title: '',
                                        tabBarLabel: 'Datos personales',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerTitleAlign: 'center',
                                        headerLeft: () => (
                                                <Icon name="arrowleft" color='#FFF' type='antdesign' size={30} style={{ marginLeft: 10 }} onPress={() => navigation.goBack()} />
                                        ),
                                        headerRight: () => (
                                                <Image source={LOGO} style={{ width: 30, height: 30, marginRight: 10 }} />
                                        ),
                                        headerTitle: () => (
                                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }}>Datos personales</Text>
                                        ),
                                        tabBarIcon: ({ color, size }) => (
                                                <Icon name="user" color={color} size={size} type='feather' />
                                        ),
                                        tabBarButton: () => null
                                })}
                        />
                        <Tabs.Screen name="productdetails" component={ProductDetail}
                                options={({ route,navigation }) => ({
                                        tabBarButton: () => null,
                                        headerTintColor: '#FFF',
                                        headerStyle: {
                                                backgroundColor: '#00A36E',
                                        },
                                        headerLeft: () => (
                                                <Button
                                                        icon={<Icon name='menu' style={{ width: 30, height: 30 }} color='#FFF' />}
                                                        color='transparent'
                                                        onPress={() => navigation.openDrawer()}
                                                />
                                        ),
                                        headerRight: () => (
                                                <Button
                                                        icon={<Image source={UserProfile} style={{ width: 30, height: 30 }} />}
                                                        color='transparent'
                                                        onPress={() => navigation.navigate('login')}
                                                />
                                        ),
                                        headerTitleAlign: 'center',
                                        headerTitle: () => (
                                                <Image source={LOGO} style={{ width: 35, height: 45 }} />
                                        )
                                })}
                        />
                </Tabs.Navigator>
        )
}

export default TabsHeader