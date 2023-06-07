import { View, Text,StyleSheet, FlatList } from 'react-native'
import React,{useState} from 'react'
import todosData from "../mocks/todos.json"
import Card from '../Card'

import AddTodo from './AddTodo';

const TodoLists = () => {
  const [todos,setTodos] = useState(todosData);


  
  const [toDoList,setToDoList]=useState([]);

  function addTask(taskContent){
    const taskContentCheck = taskContent.trim().toLowerCase();
    const checkDublicate = toDoList.find((todo)=>todo.task.trim().toLowerCase()===taskContentCheck);
    if(taskContentCheck==''){
      Alert.alert('Opps...','Please enter a valid task.');
    }
    else{
      if(checkDublicate){
        Alert.alert('Opps...','You have already added this task. ');
      }
      else{
        const newTask={
          id:toDoList.length+1,
          task:taskContent,
          isCompleted:false
        }
        setToDoList(()=>[...newTask]);
        setModalVisible(false);
      }
    }
  }

  renderTodo = ({item}) => (
    <Card todo={item} setTodos={setTodos} todos={todos} />
  );

  const renderHeader = () => (
    <View style={styles.inner_container}>
    <Text style={styles.title}>Yapılacaklar</Text>
    <Text style={styles.title}>
      {todos.filter((todo) =>!todo.isDone).length}
    </Text>
    </View>
  )

  return (
    <View style={styles.container}>


      <View style={styles.todo_container}>
         <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(item) => item.title}
        renderItem={renderTodo} 
        data={todos}
        /> 
      </View>
      <View style={styles.add_todo}>
      <AddTodo onAddTask={addTask}/> 
      </View>
      

      
    </View>
  )
}

export default TodoLists

const styles = StyleSheet.create({
    container: {
        margin:10,
        marginTop:40,
        padding:10,
        borderRadius:15,
        flex:1,
    },
    inner_container:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        color:"orange"
    },
    todo_container:{
        backgroundColor:"#609966",
        borderRadius:8,
        marginTop:30,
        padding:10,
    },
    todo_title:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
    },
    add_todo:{
      margin:20,
      marginBottom:50,
      padding:10,
      borderRadius:12,
      backgroundColor:"white",
      position:"absolute",
      bottom:0,
    }
  });
  