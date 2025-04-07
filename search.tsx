import { View, Text, TextInput, StyleSheet } from "react-native";


export default function SearchTab() {

    return (
        <View style={styles.container}>
            <Text>O que você está procurando?</Text>
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


    title: {
        fontSize: 40 ,
        fontWeight: "bold",
        marginBottom: 10 ,


},
})
