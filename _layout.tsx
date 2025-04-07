import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{ 
            tabBarShowLabel: true
            
         }}>
        <Tabs.Screen
        name= "index"
        options= {{
            title: "Início",
            tabBarIcon: ({ color }) => (
                    <FontAwesome size={ 28 } name="home" color={color} />
            ),
            //tabBarLabel: "Home"
           tabBarBadge: 2,
        }}
    />
        <Tabs.Screen
        name= "settings"
        options= {{
            title: "Ajustes",
            tabBarIcon: ({ color }) => (
                <FontAwesome size={ 28 } name="cog" color={color} />
            ),
             //tabBarLabel: "Ajustes"
        }}
    />
        <Tabs.Screen
        name= "search"
        options= {{
            title: "Buscar",
            tabBarIcon: ({ color }) => (
                <FontAwesome size={ 28 } name="search" color={color} />
            ),
             //tabBarLabel: "Buscar"
        }}
    />
    <Tabs.Screen
        name= "login"
        options= {{
            title: "Login",
            tabBarIcon: ({ color }) => (
                <FontAwesome size={ 28 } name="user" color={color} />
            ),
             //tabBarLabel: "Login"
         }}
/>
</Tabs>
)}