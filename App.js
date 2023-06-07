import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoLists from './src/components/Todo/TodoLists';


export default function App() {


  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <TodoLists />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B2447',
  },
});
