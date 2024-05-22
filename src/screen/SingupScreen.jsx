import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'

import Loading from '../components/Loading'
import { createUser } from '../../util/auth'
import { AuthContext } from '../../store/AuthContext'


export default function SingupScreen() {
  const { token, isAuthenticated, authenticate, logout } = useContext(AuthContext)

  
  const [isLoading,setIsLoading] = useState(false)

  async function singUpHandler({email,password}){
    setIsLoading(true)
    try {
      const response = await createUser(email,password)
      authenticate(response.idToken)
    } catch (error) {
      alert('Kayit olunamadi, bilgilerinizi kontrol ediniz.')
    }
    
    setIsLoading(false)
  }

  if(isLoading){
    return <Loading message="Kullanici olusturuluyor..." />
  }
  return (
    <AuthContent  onAuthenticate={singUpHandler} />
  )
}

const styles = StyleSheet.create({})