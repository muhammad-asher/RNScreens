//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
// create a component
function HomeStack(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default HomeStack;
