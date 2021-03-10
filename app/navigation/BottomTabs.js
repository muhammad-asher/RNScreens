import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	homeIcon,
	likeIcon,
	cartIcon,
	categoriesIcon,
} from "../../assets/icons";
import HomeStack from "./HomeStack";
import CategoryStack from "./CategoryStack";
import FavouriteStack from "./FavouriteStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

function BottomTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					let iconName;

					switch (route.name) {
						case "Home":
							iconName = homeIcon;
							break;

						case "Category":
							iconName = categoriesIcon;
							break;

						case "Favourite":
							iconName = likeIcon;
							break;

						case "Cart":
							iconName = cartIcon;
							break;
					}
					return (
						<Image
							source={iconName}
							style={{
								tintColor: color,
								resizeMode: "contain",
								height: 30,
								width: 35,
							}}
						/>
					);
				},
			})}
		>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
				}}
			/>
			<Tab.Screen
				name="Category"
				component={CategoryStack}
				options={{
					tabBarLabel: "Category",
				}}
			/>
			<Tab.Screen
				name="Favourite"
				component={FavouriteStack}
				options={{
					tabBarLabel: "Favourite",
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={CartStack}
				options={{
					tabBarLabel: "Cart",
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});

export default BottomTabs;
