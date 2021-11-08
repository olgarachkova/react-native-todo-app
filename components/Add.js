import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { themeColors, themeSizes } from '../constants/theme';

const Add = ({addNewTodo}) => {
    const [inputText, setInputText] = useState("");

    const onPressHandler = () => {
        addNewTodo(inputText); 
        setInputText("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                value={inputText}
                placeholder='Add your ToDo'
                placeholderTextColor={themeColors.headerColor}
            />
            <Button 
                title="Add new Todo"
                color={themeColors.secondary}
                onPress={onPressHandler}
            />
        </View>
    )
}

export default Add;

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    input: {
        backgroundColor: themeColors.secondary,
        color: themeColors.textColor,
        borderRadius: 10,
        padding: 10,
        width: themeSizes.width,
        marginBottom: 10
    },
});
