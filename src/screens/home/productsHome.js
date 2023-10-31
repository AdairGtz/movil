import { View, Text, FlatList, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../styles/home.style'
import { product } from '../../utils/contants'
import { Button, Icon, Image } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
const Item = ({ product }) => {

        const { mainImage, name, price, id } = product

        const navigation = useNavigation()

        const getProductId = () => {
                navigation.navigate('productdetails', { id })
        }

        return (
                <View style={styles.item}>
                        <Pressable style={styles.boxContent} onPress={getProductId}>
                                <View style={styles.boxImage}>
                                        <Image style={styles.imageProduct} source={{ uri: mainImage }} />
                                </View>
                                <Text style={styles.textNameProduct}>{name}</Text>
                                <View style={styles.boxPrice}>
                                        <Text style={styles.textPriceProduct}>${price}</Text>
                                        <View style={styles.boxStar}>
                                                <Icon name='star' type='antdesign' color='#FFB549' />
                                                <Text style={styles.numberStart}>4</Text>
                                        </View>
                                </View>
                        </Pressable>
                        <Button title='' icon={<Icon name='shoppingcart' type='antdesign' color='#FFF' size={30} />} containerStyle={styles.buttonAdd} color='#9973DA' />
                </View>
        )
}

const ProductsHome = () => {

        return (
                <View style={styles.containerProducts}>
                        <SafeAreaView />
                        <FlatList
                                scrollEnabled={false}
                                columnWrapperStyle={styles.separator}
                                style={styles.list}
                                data={product}
                                numColumns={2}
                                renderItem={({ item }) => <Item product={item} />}
                                keyExtractor={item => item.id.toString()}
                        />
                </View>
        )
}

export default ProductsHome