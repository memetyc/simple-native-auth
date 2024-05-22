import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'
import createUser from '../../util/auth'

export default function AuthContent({isLogin,onAuthenticate}) {
  const [isValid,setIsValid] = useState({email:false,password:false,passwordConfrim:false})
  const navigation = useNavigation()
  const switchScreen = () =>{
    if(isLogin){
      navigation.navigate('Singup')
    }else{
      navigation.navigate('Login')
    }
  }
  function submitHandler({email,password,passwordConfrim}){
    email = email.trim()
    password = password.trim()
    passwordConfrim = passwordConfrim.trim()
    const emailIsValid = email.includes('@')
    const passwordIsValid = password.length > 5
    const passwordAreEqual = password == passwordConfrim
    setIsValid({email:!emailIsValid,password:!passwordIsValid,passwordConfrim:!passwordAreEqual})
    if(!emailIsValid){
      return Alert.alert('Hops!','Email adresi hatali')
    }else if(!passwordIsValid){
      return Alert.alert('Hops!','Parola 6 karakterden kisa olamaz.')
    }
    else if(!isLogin){
      if(!passwordAreEqual){
        return Alert.alert('Hops!','Parolalar ayni olmali')
      }
    }
    
    
    onAuthenticate({email,password})

  }

  return (
    <View style={styles.container}>
      <AuthForm isLogin={isLogin} isValid={isValid} onSubmit={submitHandler} />
      <View>
        <ButtonWhite onPress={switchScreen}>
          {isLogin ? 'Yeni kullanici olustur' : 'Giris Yap'}
        </ButtonWhite>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

    marginTop:50,
    marginHorizontal:20,
    backgroundColor:'lightblue',
    padding:20,
    borderRadius:10,
    elevation:4,
    shadowColor:'hotpink',
    shadowOffset:{width:3,height:5},
    shadowOpacity:0.4,
    shadowRadius:5

  }
})