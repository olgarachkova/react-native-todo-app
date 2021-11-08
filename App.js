import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { themeColors, themeSizes } from './constants/theme';
import Header from './components/Header'
import Item from './components/Item'
import Add from './components/Add';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todoText) => {
    if (todoText==='') return;
    setTodos([{text: todoText, key: Math.random().toString(36).substring(7)}, ...todos]);
  }

  const deleteToDo = (todoKey) => {
    setTodos(todos.filter(todo=>todo.key!==todoKey))
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Add addNewTodo={addNewTodo} />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Item 
            todo={item} 
            deleteItem={deleteToDo}
          />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.primary,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  input: {
    backgroundColor: themeColors.secondary,
    color: themeColors.textColor,
    borderRadius: 10,
    padding: 10,
    width: themeSizes.width
  }
});
