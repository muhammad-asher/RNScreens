import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AdsComponent({ item }) {
	return (
		<View style={styles.container}>
			<Image style={styles.iconimage} source={item.image} />
			<Text>{item.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		height: "20%",
		alignItems: "center",
	},
	iconimage: {
		backgroundColor: "white",
		resizeMode: "cover",
		height: 120,
		width: 120,
		marginBottom: 5,
		marginHorizontal: 5,
		borderRadius: 10,
		borderColor: "black",
	},
});
