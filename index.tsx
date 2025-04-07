import { View, Text, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router"
import { EInterFonts } from "../../src/shared/inter-fonts-enum";
import { EOpenSansFonts } from "../../src/shared/opensans-fonts-enum";

export default function HomeTab() {

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, fontFamily: EOpenSansFonts.BOLD }}>ReUse</Text>
           <Link href={"tabs"}>Index </Link>
           <Link href={"tabs"}>Home </Link>
         </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },

    input: {
        borderWidth: 1,
        borderColor:"blaclk",
        borderRadius: 10,
        width: 300,
        marginTop:20,
    },


    title: {
        fontSize: 40 ,
        fontWeight: "bold",
        marginBottom: 10 ,


    }


});