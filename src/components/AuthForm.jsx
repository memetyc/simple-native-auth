import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin,onSubmit,isValid }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfrim, setPasswordConfrim] = useState("");

  function updateInput(inputType, enteredValue) {
    if (inputType == "email") {
      setEmail(enteredValue);
    }else if(inputType == "password"){
        setPassword(enteredValue)
    }else if(inputType == "passwordConfrim"){
      setPasswordConfrim(enteredValue)
    }
  }


  function submitHandler(){
    onSubmit({
      email,
      password,
      passwordConfrim
    })
  }

  return (
    <View>
      <Input
        label="Email"
        keyboardType="email-address"
        onUpdateValue={updateInput.bind(this, "email")}
        value={email}
        isValid={isValid.email}
      />
      <Input
        label="Sifre"
        secureTextEntry={true}
        onUpdateValue={updateInput.bind(this, "password")}
        value={password}
        isValid={isValid.password}
      />
      {
        !isLogin &&
        <Input
        label="Sifre Dogrula"
        secureTextEntry={true}
        onUpdateValue={updateInput.bind(this, "passwordConfrim")}
        value={passwordConfrim}
        isValid={isValid.passwordConfrim}
      />
      }
      <View>
        <Button onPress={submitHandler} >{isLogin ? 'Giris Yap' : 'Kayit Ol'}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
