import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';

// React Native
import { Button, StyleSheet, Text, View } from 'react-native';

// Class , Function Component
import ClassTimerApp from './src/container/ClassTimerApp';
import FunctionTimerApp from './src/container/FunctionTimerApp';

// CREATE
// Create
const Stack=createNativeStackNavigator();

// FUNCTION
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"      component={HomeScreen}    options={{ title: "Anasayfa" }} />
        <Stack.Screen name="TimerClass"   component={ClassTimerApp} options={{ title: "Timer Class App" }} />
        <Stack.Screen name="TimerFunction"   component={FunctionTimerApp} options={{ title: "Timer Function App" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// BUTTON HomeScreen
const HomeScreen = ({ navigation,route }) => {
  return (
    <View>

      {/* Counter */}
      <View style={{ marginBottom: 10 }}>
        <Button
          color='orange'
          title='Class Timer App'
          onPress={() => navigation.navigate('TimerClass', { name: 'TimerClass' })} />
      </View>

        {/* Counter */}
        <View style={{ marginBottom: 10 }}>
        <Button
          color='blue'
          title='Function Timer App'
          onPress={() => navigation.navigate('TimerFunction', { name: 'TimerFunction' })} />
      </View>
    </View> // common View
  ); //end return 
} //end HomeScreen

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});