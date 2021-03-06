import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./app/navigation/BottomTabs";
import Login from "./app/screens/Login";
export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<BottomTabs />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
