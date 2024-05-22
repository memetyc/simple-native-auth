import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SingupScreen from './src/screen/SingupScreen';
import AuthContextProvider, { AuthContext } from './store/AuthContext';
import { useContext } from 'react';


const Stack = createNativeStackNavigator();


function NormalStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'lightblue',
      },
      headerTintColor:'white',
    }}>
      <Stack.Screen name="Login" component={LoginScreen}
        options={{
          headerTitle:'Kullanici Giris'
        }} 
      />
      <Stack.Screen name="Singup" component={SingupScreen} 
      options={{
        headerTitle:'Kullanici kayit'
      }}  />
    </Stack.Navigator>
  )
}

function AfterAuthStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'lightblue',
      },
      headerTintColor:'white',
    }}>
      <Stack.Screen name="Anasayfa" component={HomeScreen}
        options={{
          headerTitle:'Anasayfa'
        }} 
      />
    </Stack.Navigator>
  )
}

function Navigation(){
  const { token, isAuthenticated, authenticate, logout } = useContext(AuthContext)
  return(
        <NavigationContainer>
           {isAuthenticated ? <AfterAuthStack/> : <NormalStack/>} 
        </NavigationContainer>
  )
}

export default function App() {

  
  return (
      <AuthContextProvider>
        <Navigation/>
      </AuthContextProvider>
  );
}

const styles = StyleSheet.create({});
