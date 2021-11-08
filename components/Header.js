import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { themeColors, themeSizes } from '../constants/theme'

const Header = (props) => {
    return (
        <View {...props}>
            <Text style={styles.header}>ToDo App</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        color: themeColors.headerColor,
        fontSize: themeSizes.header,
        padding: 20,
        paddingTop: 50
    }
})
