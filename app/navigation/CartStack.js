//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import CartScreen from "../screens/CartScreen";
// create a component
function CartStack(props) {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Cart" component={CartScreen} />
		</Stack.Navigator>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default CartStack;
