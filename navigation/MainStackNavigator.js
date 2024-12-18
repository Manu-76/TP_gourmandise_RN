import React from "react";
//1- On importe un composant qui va contenir les écrans (de la pile) lors de la navigation
import { NavigationContainer } from "@react-navigation/native";
//2- On importe un composant qui va gérer la pile
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//3- On importe les écrans participant à la navigation
import HomeScreen from "../components/HomeScreen";
import SecondScreen from "../components/SecondScreen";
import MacaronDetail from "../components/MacaronDetail";
import Header from "../components/Header";
//4- On instancie une pile de navigation
const Stack = createNativeStackNavigator();
//5-
export default function MainStackNavigator() {
    //6- 
    return (
        //6.1- Container de la pile
        <NavigationContainer>
            {/* 6.2 */}
            <Stack.Navigator>
                {/* 6.3 */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Second"
                    component={SecondScreen}
                    options={{ 
                        headerTitle: (props) => <Header {...props} />
                    }}
                />
                < Stack.Screen
                    name="MacaronDetail"
                    component={MacaronDetail}
                    options={{ 
                        headerTitle: (props) => <Header {...props} /> 
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}