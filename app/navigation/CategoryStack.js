//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import CategoriesScreen from "../screens/CategoriesScreen";
// create a component
function CategoryStack(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Category" component={CategoriesScreen} />
		</Stack.Navigator>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default CategoryStack;
