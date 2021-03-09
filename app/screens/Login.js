//import liraries
import React, { useState } from "react";

import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
// create a component
function Login(props) {
	const [mobileno, setmobileno] = useState("");
	const [password, setpassword] = useState("");

	return (
		<View style={styles.container}>
			<View style={styles.uppercontainer}>
				<Image
					style={styles.image}
					source={require("../../assets/Images/cart.png")}
				/>
				<Text style={styles.text}>eKaRT</Text>
			</View>
			<Card style={styles.card}>
				<Card.Title style={{ paddingLeft: 140 }} title="Login" />
				<TextInput
					style={styles.input}
					value={mobileno}
					selectionColor="#4DA9DD"
					label="Mobile No"
				/>
				<TextInput
					style={styles.input}
					value={password}
					selectionColor="#4DA9DD"
					label="Password"
				/>
			</Card>
			<Text style={styles.forgotpassword}>Forgot Password ?</Text>
			<TouchableOpacity>
				<Button style={styles.button} mode="contained" color="#5DA3FA">
					Login
				</Button>
			</TouchableOpacity>
			<Text style={{ color: "blue", marginTop: 15 }}>
				Not Registered Yet ? Click Here to SignUp
			</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		width: "100%",
	},
	card: {
		width: "95%",
		marginTop: 10,
		backgroundColor: "white",
	},
	uppercontainer: {
		flex: 0.5,
		marginTop: 50,
		width: "100%",
		color: "blue",
		justifyContent: "center",
		backgroundColor: "#1B98F5",
	},
	input: {
		marginTop: 20,
		backgroundColor: "white",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 20,
	},
	text: {
		justifyContent: "center",
		alignSelf: "center",
		color: "#EDBF69",
	},
	image: {
		tintColor: "#EDBF69",
		height: 50,
		width: 50,
		alignSelf: "center",
	},
	button: {
		width: 200,
		marginTop: 30,
	},
	forgotpassword: {
		color: "blue",
		marginTop: 20,
		marginRight: 10,
		alignSelf: "flex-end",
	},
});

//make this component available to the app
export default Login;
