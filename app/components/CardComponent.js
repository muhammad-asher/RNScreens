import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CardComponent({ item }) {
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
		borderRadius: 20,
		backgroundColor: "#758283",
		borderColor: "black",
	},
});
