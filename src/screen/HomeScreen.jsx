import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../store/AuthContext";
import { useContext } from "react";
import Button from "../components/Button";




export default function HomeScreen(){
    const { token, isAuthenticated, authenticate, logout } = useContext(AuthContext)
    console.log(token);
    return(
        <View style={styles.container}>
            <Button onPress={logout}>Cikis Yap</Button>
            <Text>
                Home
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})