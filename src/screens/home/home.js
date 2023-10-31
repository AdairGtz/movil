import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { styles } from '../../styles/home.style'
import { ButtonGroup, SearchBar } from '@rneui/themed'
import ProductsHome from './productsHome'

const imageHome = require('../../../assets/image_principal.jpg')

const HomeScreen = ({ navigation }) => {

        const categories = ['Insumos', 'Plantas', 'Macetas', 'Fertilizantes', 'Herramientas']
        const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

        return (
                <ScrollView horizontal={false}>
                        <View style={styles.containerHome}>
                                <View style={styles.containerSearching}>
                                        <SearchBar
                                                placeholder='Busca aqui tus plantas favoritas'
                                                value=''
                                                containerStyle={styles.containerStyle}
                                                inputContainerStyle={styles.inputContainerStyle}
                                                inputStyle={styles.inputStyleSearch}
                                        />
                                </View>
                                <View style={styles.containerImage}>
                                        <Image style={styles.mainImage} source={imageHome} />
                                </View>
                                <Text style={styles.textFilter}>Categorias</Text>
                                <View style={styles.containerCategories}>
                                        <ScrollView horizontal={true} contentContainerStyle={styles.scrollCategories} showsHorizontalScrollIndicator={false}>
                                                <ButtonGroup
                                                        buttons={categories}
                                                        containerStyle={styles.containerButtonGroup}
                                                        buttonContainerStyle={styles.buttonCategories}
                                                        selectMultiple
                                                        selectedButtonStyle={styles.selectedButtonStyle}
                                                        buttonStyle={styles.buttonStyle}
                                                        selectedIndexes={selectedIndexes}
                                                        onPress={(value) => {
                                                                setSelectedIndexes(value);
                                                        }}
                                                />
                                        </ScrollView>
                                </View>
                                <ProductsHome />
                        </View>
                </ScrollView>
        )
}

export default HomeScreen
