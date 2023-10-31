import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Image } from '@rneui/themed'
import { BACKGROUND, LOGO } from '../utils/contants'

const widthScreeen = Dimensions.get('screen').width

const ScreenTemplate = ({ children }) => {
        return (

                <View style={styles.container}>
                        <View style={styles.boxTop}>
                                <Image source={BACKGROUND} style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View style={styles.box_title}>
                                <Image style={styles.logo} source={LOGO} />
                        </View>
                                {children}
                </View>
        )
}

const styles = StyleSheet.create({

        boxTop: {
                position: 'absolute',
                width: '150%',
                height: '60%',
                top: 0,
                left: '-25%',
                zIndex: 1,
                borderBottomLeftRadius: widthScreeen,
                borderBottomRightRadius: widthScreeen,
                overflow: 'hidden'
        },
        container: {
                position: 'relative',
                flex: 1,
                backgroundColor: '#DBEFED',
                alignItems: 'center',
                justifyContent: 'center'
        },
        scrollView: {
                position: 'relative',
                flex: 1,
        },
        box_title: {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'auto',
                marginTop: 20,
                zIndex: 2
        },
        logo: {
                width: 120,
                height: 140,
        },
})


export default ScreenTemplate