import { View, Text, Button, StyleSheet } from "react-native"

import { useRouter } from "expo-router";

export default function AjustesTab() {
    const router = useRouter();

    const handlePress = () => {
     router.push ("./produto");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text>Novidades</Text>
            <Button title="Produtos" onPress={handlePress}></Button>
            
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        
    },
    title: {
        fontSize: 20,
        fontWeight:"bold",
        marginBottom: 20,
    }
});