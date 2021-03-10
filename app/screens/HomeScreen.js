//import liraries
import React from "react";
import { View, StyleSheet, Text } from "react-native";

// create a component
function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
});

//make this component available to the app
export default HomeScreen;
