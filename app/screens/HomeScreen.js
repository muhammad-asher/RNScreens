//import liraries
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Searchbar } from "react-native-paper";

// create a component
function HomeScreen(props) {
	return (
		<View style={styles.container}>
			<Searchbar
				style={styles.searchbar}
				placeholder="Search"
				iconColor="black"
			/>
			<Image
				style={styles.adImage}
				source={require("../../assets/Images/Bakingad.png")}
			/>
			<View style={styles.card}>
				<Text style={styles.text}>Shop By Category</Text>
			</View>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {},
	searchbar: {
		width: "95%",
		margin: 10,
		borderRadius: 10,
	},
	adImage: {
		width: "97%",
		height: 200,
		margin: 5,
		borderRadius: 10,
	},
	text: {
		margin: 15,
		alignSelf: "center",
		fontSize: 17,
	},
	card: {},
});

//make this component available to the app
export default HomeScreen;
