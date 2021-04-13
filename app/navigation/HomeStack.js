//import liraries
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { hamburgerIcon, shoppingcartIcon } from "../../assets/icons";
const Stack = createStackNavigator();
// create a component
function HomeStack(props) {
	const headerLeft = () => {
		return <Image source={hamburgerIcon} style={styles.leftImage} />;
	};

	const headerRight = () => {
		return <Image source={shoppingcartIcon} style={styles.leftImage} />;
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="EKart"
				component={HomeScreen}
				options={{
					title: "Hi, There!",
					headerLeft: () => headerLeft(),
					headerRight: () => headerRight(),
					headerTitleAlign: "left",
					headerTintColor: "white",
					headerStyle: {
						backgroundColor: "#1da1f2",
					},
				}}
			/>
		</Stack.Navigator>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
	leftImage: {
		resizeMode: "contain",
		height: 30,
		width: 30,
		marginHorizontal: 10,
		tintColor: "white",
	},
});

//make this component available to the app
export default HomeStack;
