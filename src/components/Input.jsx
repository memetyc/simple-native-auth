import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function Input({ label, keyboardType, onUpdateValue,value,secureTextEntry,isValid }) {

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label} >{label}:</Text>
      <TextInput
        style={isValid ? [styles.input,styles.isValid] : styles.input}
        placeholder={label}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={secureTextEntry}
        autoComplete='off'
        textContentType="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer:{
      paddingVertical:10
    },
    label:{
        fontSize:20,
        marginBottom:3
    },
    input:{
        padding:10,
        fontSize:20,
        borderRadius:5,
        backgroundColor:'pink',
        borderColor:'white',
        borderWidth:1
    },
    isValid:{
      borderColor:'red',
      backgroundColor:'red'
    }
});
