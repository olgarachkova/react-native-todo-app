import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { themeColors, themeSizes } from '../constants/theme';

const Item = ({todo, deleteItem, props}) => {
    return (
        <TouchableOpacity 
            style={styles.item} 
            onPress={()=>{deleteItem(todo.key)}}
            {...props}
        >
            <Text style={styles.itemText}>{todo.text}</Text>
        </TouchableOpacity>
    )
}

export default Item;

const styles = StyleSheet.create({
    item: {
        backgroundColor: themeColors.secondary,
        borderRadius: 25,
        padding: 20,
        marginTop: 10,
        width: themeSizes.width,
        textAlign: 'center'
    },
    itemText: {
        color: themeColors.textColor,
        fontSize: themeSizes.text
    }
});
