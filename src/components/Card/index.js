import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = ({ todo, setTodos, todos }) => {
  const handlePress = () => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((item) => item.id === todo.id);
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: todo.isDone ? "#f87171" : "#a3e635",
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textDecorationLine: todo.isDone ? "line-through" : "none",
      fontStyle: todo.isDone ? "italic" : "normal",
    },
  });

  const deleteTodo = () => {
    Alert.alert("Delete todo", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          const updatedTodos = [...todos];
          const index = updatedTodos.findIndex((item) => item.id === todo.id);
          updatedTodos.splice(index, 1);
          setTodos(updatedTodos);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      onLongPress={deleteTodo}
    >
      <Text style={styles.title}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;