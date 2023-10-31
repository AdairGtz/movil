import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { product } from '../../utils/contants'
import { styles } from '../../styles/productDetails.style'
import { Button, Icon, Image, Rating } from '@rneui/themed'
const materialIcon = require('../../../assets/icons/icons8-alimentos-orgánicos-64(1).png')
const heightIconPng = require('../../../assets/icons/icons8-altura-96.png')
const diameterIcon = require('../../../assets/icons/icons-diámetro-96.png')
const capacityIcon = require('../../../assets/icons/icons8-capacidad-64.png')
const drenadoIcon = require('../../../assets/icons/icons8-planta-bajo-la-lluvia-100.png')
const carIcon = require('../../../assets/icons/icons8-camión-100.png')
const diamondIcon = require('../../../assets/icons/icons8-diamante-100.png')
const quarantyIcon = require('../../../assets/icons/icons8-seguridad-100.png')

const Br = ({ color = '#000' }) => {
        return (
                <View style={{ width: '100%', height: 1, backgroundColor: color,marginTop:15 }}></View>
        )
}
const RatingStars = ({ rating }) => {
        const numerStart = Array.from({ length: 5 }, (_, i) => i + 1)
        return (
                <>
                        {
                                numerStart.map(item => (
                                        <Icon
                                                key={item}
                                                name='star'
                                                color={item <= rating ? '#FFC107' : '#C0C0C0'}
                                                size={20}
                                        />
                                ))
                        }
                </>
        )
}

const ProductDetail = ({ route, navigation }) => {

        const { id } = route.params
        const details = product.find(item => item.id === id)


        return (
                <>
                        {
                                Object.keys(details).length > 0 ? (
                                        <ScrollView contentContainerStyle={styles.container}>
                                                <View style={styles.boxImage}>
                                                        <Image source={{ uri: details.mainImage }} containerStyle={styles.image} />
                                                        <TouchableOpacity style={styles.buttonAddProduct}>
                                                                <Icon name='shoppingcart' type='antdesign' color='#FFF' size={40} />
                                                        </TouchableOpacity>
                                                </View>
                                                <View style={styles.boxCard}>
                                                        <View style={styles.boxPrice}>
                                                                <Text style={styles.price}>${details.price}</Text>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={styles.titleStock}>En stock: </Text>
                                                                        <Text style={styles.stock}>{details.stock}</Text>
                                                                </View>
                                                        </View>
                                                        <View style={styles.boxPrice}>
                                                                <Text>{details.name}</Text>
                                                                <View style={styles.boxRating}>
                                                                        <RatingStars rating={details.stars} />
                                                                        <Text>{details.stars}</Text>
                                                                </View>
                                                        </View>
                                                        <View style={styles.caracteristics}>
                                                                <View style={styles.boxVariant}>
                                                                        <Text style={{ fontWeight: 'bold' }}>Color</Text>
                                                                        <View style={styles.boxColor}>
                                                                                {details.colors.map(item => (
                                                                                        <Text key={item.id} style={{ backgroundColor: item.color, width: 25, height: 25, borderRadius: 12.5 }}></Text>
                                                                                ))}
                                                                        </View>
                                                                </View>
                                                                <View style={styles.boxVariant}>
                                                                        <Text style={{ fontWeight: 'bold' }}>Tamaño</Text>
                                                                        <View style={{ flexDirection: 'row', gap: 10 }}>
                                                                                {details.dimension.map((item, index) => (
                                                                                        index === 0 ? (
                                                                                                <Text key={item.id} style={[styles.size, styles.sizeSelected]}>{item.size}</Text>
                                                                                        ) : (
                                                                                                <Text key={item.id} style={styles.size}>{item.size}</Text>
                                                                                        )
                                                                                ))}
                                                                        </View>
                                                                </View>
                                                        </View>
                                                        <View style={{ gap: 5 }}>
                                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Descripción</Text>
                                                                <Text style={{ fontSize: 15, textAlign: 'left' }}>{details.description}</Text>
                                                        </View>
                                                </View>
                                                <View style={styles.boxCard}>
                                                        <Text>Caracteristicas</Text>
                                                        <View style={{ flexDirection: 'row', width: '100%' }}>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Icon name='check' color='#00A36E' size={30} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Marca</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Image source={materialIcon} style={{ width: 30, height: 30 }} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Material</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Image source={heightIconPng} style={{ width: 30, height: 30 }} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Altura</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                        </View>
                                                        <Br color='#CCC'/>
                                                        <View style={{ flexDirection: 'row', width: '100%',marginTop:10 }}>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Image source={diameterIcon} style={{ width: 30, height: 30 }} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Diametro</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Image source={capacityIcon} style={{ width: 30, height: 30 }} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Capacidad</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                                                        <Image source={drenadoIcon} style={{ width: 30, height: 30 }} />
                                                                        <View style={{ flex: 1 }}>
                                                                                <Text style={{ fontWeight: 'bold' }}>Drenado</Text>
                                                                                <Text>{details.brand}</Text>
                                                                        </View>
                                                                </View>
                                                        </View>
                                                        <Br color='#CCC'/>
                                                        <View style={styles.boxWeOffer}>
                                                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ofrecemos</Text>
                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                                                        <View style={styles.contentWeOffer}>
                                                                                <Image source={carIcon} style={{ width: 40, height: 40 }} />
                                                                                <Text>Envio gratis</Text>
                                                                        </View>
                                                                        <View style={styles.contentWeOffer}>
                                                                                <Image source={quarantyIcon} style={{ width: 30, height: 30 }} />
                                                                                <Text>Garantia de 20 dias</Text>
                                                                        </View>
                                                                </View>
                                                                <View style={styles.contentWeOffer}>
                                                                        <Image source={diamondIcon} style={{ width: 50, height: 50 }} />
                                                                        <Text>Calidad garantizada</Text>
                                                                </View>
                                                        </View>
                                                </View>
                                                <Text>Comentarios</Text>
                                                <View style={[styles.boxCard, { flexDirection: 'row', alignItems: 'flex-start', gap: 10 }]}>
                                                        <View>
                                                                <Image source={diameterIcon} style={{ width: 50, height: 50 }} />
                                                        </View>
                                                        <View style={styles.boxComments}>
                                                                <Text>Fernando Hernandez</Text>
                                                                <Text>Me gusto mucho,buena calidad</Text>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <RatingStars rating={4} />
                                                                </View>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                                        <Text>fecha : 15/09/2023</Text>
                                                                        <Button title='Responder' color='#00A36E' containerStyle={{ width: 100, borderRadius: 20 }} titleStyle={{ fontSize: 15 }} size='sm' />
                                                                </View>
                                                        </View>
                                                </View>
                                        </ScrollView>
                                ) : (
                                        <ScrollView>
                                                <View>
                                                        <Text>El producto no se ha encontrado</Text>
                                                </View>
                                        </ScrollView>
                                )
                        }
                </>
        )
}

export default ProductDetail