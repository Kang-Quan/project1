import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";

function EventsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}

const Stack = createStackNavigator();

export default function EventStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name= "EventsHome" component={EventsScreen}/>
        </Stack.Navigator>
    )
}