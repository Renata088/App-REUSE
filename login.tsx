import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button, TextInput, StyleSheet } from "react-native";


export default function loginTab () {
    const key ='chave'

    const saveItem = async (value: string) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log(error)
        }
    }
    const removeItem = async () => {
        try {
            await AsyncStorage.removeItem(key);
        } catch(error) {
            console.log(error);
        }
    };
    const getItem = async () => {
        try {
          const response = await AsyncStorage.getItem(key);
          
          if (response !== null ){
            alert ('O valor é $ {response}')
          } else {
            alert( "Nenhum usuário encontrado");
          }
         } catch (error) {
            console.log(error);
        
    } 

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.textInput}
            onSubmitEditing= {(event) => {
                saveItem(event.nativeEvent.text);
            }}
            placeholder= "Digite seu CPF para salvar"
        />

           <Button title="Ler CPF" onPress= {() => {getItem}} />   
           <Button title="Apagar CPF" onPress= {() => {removeItem}} />
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },

    input: {
        borderWidth: 1,
        borderColor:"gray",
        borderRadius: 10,
        width: 300,
        padding: 5,
        marginTop:20,
    },

    textInput: {
        height: 35,
        borderColor: "gray",
        borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center"
    }
});
}
