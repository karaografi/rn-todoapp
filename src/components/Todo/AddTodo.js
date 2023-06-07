import { View, Text,StyleSheet, TextInput, Button, Dimensions } from 'react-native'
import React from 'react'

const AddTodo = ({onAddTask}) => {
    const [taskInputValue, setTaskInputValue] = React.useState();

    function hanleAddTask(){
      if(taskInputValue){
        onAddTask(taskInputValue);
      }
      setTaskInputValue('');
    }

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={(t) => setTaskInputValue(t)}
        value={taskInputValue}
        multiline={true}
        placeholder="Yapılacaklar..."
        keyboardType="numeric"
      />
        <Button
        style={styles.add_button}
        title="Kaydet"
        onPress={hanleAddTask}
      />
    </View>
  )
}

export default AddTodo


const styles = StyleSheet.create({
    container: {
        width:Dimensions.get("window").width * 0.85,
    },
    input:{
        height: 40,
        marginBottom: 10,
        borderBottomWidth:1,
        padding:10
    },
    add_button:{
        borderRadius:10,
    }
  });
  