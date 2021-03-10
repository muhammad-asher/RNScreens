//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import FavouriteScreen from "../screens/FavouriteScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
// create a component
function FavouriteStack(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={FavouriteScreen} />
		</Stack.Navigator>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default FavouriteStack;
