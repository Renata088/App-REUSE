import { View, Text, TextInput, StyleSheet } from "react-native";


export default function LoginTab() {

    return (
        <View style={styles.container}>
            <Text>Digite seu E-mail ou CPF</Text>
            <TextInput placeholder="Input" style={styles.input} />
            <Text>Digite sua sennha</Text>
            <TextInput placeholder="Input" style={styles.input} />
         </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        borderWidth: 1,
        borderColor:"gray",
        borderRadius: 10,
        width: 300,
        padding: 5,
        marginTop:20,
    },
})