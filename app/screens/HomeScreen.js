//import liraries
import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import CardComponent from "../components/CardComponent";
import {
	birthdaycake,
	drinks,
	fastfood,
	fruits,
	cutlery,
	supplies,
	vegetable,
} from "../../assets/icons";
import {
	arielsurf,
	butter,
	dettol,
	furniture,
	walls,
	eappliances,
} from "../../assets/Images";
import { ScrollView } from "react-native-gesture-handler";
import AdsComponent from "../components/AdsComponent";
const carddata = [
	{
		image: drinks,
		text: "Beverages",
	},
	{
		image: vegetable,
		text: "Vegetables",
	},
	{
		image: cutlery,
		text: "Baby Needs",
	},

	{
		image: fastfood,
		text: "Fast Food",
	},
	{
		image: supplies,
		text: "Home Supplies",
	},
	{
		image: birthdaycake,
		text: "Cakes",
	},
	{
		image: fruits,
		text: "Fruits",
	},
];
Adsdata = [
	{
		image: walls,
	},
	{
		image: eappliances,
	},
	{
		image: dettol,
	},
	{
		image: furniture,
	},
	{
		image: arielsurf,
	},
	{
		image: butter,
	},
];
// create a component
function HomeScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Searchbar
					style={styles.searchbar}
					placeholder="Search by Product Name"
					iconColor="#3b8bd4"
				/>
				<Image
					style={styles.adImage}
					source={require("../../assets/Images/Bakingad.png")}
				/>
				<View>
					<Text style={styles.text}>Shop By Category</Text>
					<Text
						style={{
							color: "#e38231",
							alignSelf: "flex-end",
							paddingHorizontal: 10,
						}}
					>
						View All
					</Text>
				</View>
				<FlatList
					data={carddata}
					keyExtractor={(_, index) => index.toString()}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					renderItem={({ item }) => {
						return <CardComponent item={item} />;
					}}
				/>
				<View>
					<Text style={{ paddingHorizontal: 10 }}>
						Hot Products
						<Text
							style={{
								color: "#e38231",
								alignSelf: "flex-end",
								paddingHorizontal: 10,
							}}
						>
							View All
						</Text>
					</Text>
					<Text style={{ paddingHorizontal: 10, color: "#909196" }}>
						Hot Deals
					</Text>
					<FlatList
						data={Adsdata}
						keyExtractor={(_, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						horizontal={true}
						renderItem={({ item }) => {
							return <AdsComponent item={item} />;
						}}
					/>
				</View>
			</View>
		</ScrollView>
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
		width: "95%",
		height: 200,
		margin: 5,
		borderRadius: 10,
	},
	text: {
		alignSelf: "center",
		margin: 5,
	},
});

//make this component available to the app
export default HomeScreen;
