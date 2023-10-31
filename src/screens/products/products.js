import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed'
import { product } from '../../utils/contants'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from './card'

const Products = () => {

        return (
                <View style={styles.flex}>
                        <View style={styles.boxTitle}>
                                <Text style={styles.title}>Productos</Text>
                        </View>
                        <View style={styles.containerSearching}>
                                <SearchBar
                                        placeholder='Busca aqui tus plantas favoritas'
                                        value=''
                                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 30, padding: 2 }}
                                        inputContainerStyle={{ backgroundColor: 'transparent', padding: 0, margin: 0 }}
                                        inputStyle={{ backgroundColor: 'transparent', color: '#000', padding: 0, margin: 0, fontSize: 14 }}
                                />
                        </View>
                        <View style={styles.containerList}>
                                <SafeAreaView />
                                <FlatList
                                        columnWrapperStyle={styles.separator}
                                        style={styles.list}
                                        data={product}
                                        numColumns={2}
                                        horizontal={false}
                                        renderItem={({ item }) => <Card item={item} />}
                                        keyExtractor={item => item.id.toString()}
                                />
                        </View>
                </View>
        )
}

const styles = StyleSheet.create({
        flex: {},
        boxTitle: {},
        title: {
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
        },
        containerSearching: {
                padding: 10,
        },
        containerList: {
                width: '100%',
                padding: 10,
        },
        separator: {
                gap: 10,
                marginBottom: 10,
        }
})

export default Products