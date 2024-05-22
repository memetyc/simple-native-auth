import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import { login } from '../../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../../store/AuthContext'

export default function LoginScreen() {
  const { token, isAuthenticated, authenticate, logout } = useContext(AuthContext)

  console.log(token);
  const [isLoading,setIsLoading] = useState(false)

  async function singInHandler({email,password}){
    setIsLoading(true)
    try {
      const response =  await login(email,password)
      authenticate(response.idToken)
    } catch (error) {
      alert('Giris yapilamadi bilgilerinizi kontrol ediniz')
    }
    setIsLoading(false)
  }
  if(isLoading){
    return <Loading message="Giris yapiliyor..." />
  }
  return (
    <AuthContent isLogin onAuthenticate={singInHandler} />
  )
}

const styles = StyleSheet.create({})