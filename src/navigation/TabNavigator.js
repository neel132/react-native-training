import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import NavigationKeys from "./keys";
import Home from "../screens/Home/Home";
const BottomTabs = createBottomTabNavigator();
const Tabs = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen name={NavigationKeys.profile} component={Profile}/>
			<BottomTabs.Screen name={NavigationKeys.home} component={Home} />
		</BottomTabs.Navigator>
	)
}

export default Tabs;