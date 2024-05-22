import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


async function getToken(){
    const token = await AsyncStorage.getItem('token')
    return token
}

export const AuthContext = createContext({
    token:'',
    isAuthenticated:false,
    authenticate:(token)=>{},
    logout:()=>{}
})

export default function AuthContextProvider({children}) {
    const [authToken,setAuthToken] = useState(null)

    async function getToken(){
        const token = await AsyncStorage.getItem('token')
        setAuthToken(token)
    }

    useEffect(()=>{
        getToken()
    },[])

    async function authenticate(token){
        setAuthToken(token)
        await AsyncStorage.setItem('token',token)
    }
    async function logout(){
        setAuthToken(null)
        await AsyncStorage.removeItem('token')
    }

    const value = {
        token : authToken,
        isAuthenticated : !!authToken,
        authenticate:authenticate,
        logout:logout
    }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})