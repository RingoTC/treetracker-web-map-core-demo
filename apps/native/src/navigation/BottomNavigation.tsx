import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { HomeIcon, OfferIcon, TermIcon, WalletIcon } from "../components/Icons";
import HomeScreen from "../screens/HomeScreen";
import OfferScreen from "../screens/OfferScreen";
import WalletScreen from "../screens/WalletScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 80,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconComponent;

          if (route.name === "Home") {
            iconComponent = (
              <HomeIcon color={focused ? color : "gray"} size={31} />
            );
          } else if (route.name === "Wallet") {
            iconComponent = (
              <WalletIcon color={focused ? color : "gray"} size={31} />
            );
          } else if (route.name === "Offer") {
            iconComponent = (
              <OfferIcon color={focused ? color : "gray"} size={31} />
            );
          } else if (route.name === "Term") {
            iconComponent = (
              <TermIcon color={focused ? color : "gray"} size={31} />
            );
          }
          return iconComponent;
        },
        tabBarActiveTintColor: "#3FDEAE",
        tabBarInactiveTintColor: "#B3B4C3",
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Offer" component={OfferScreen} />
      <Tab.Screen name="Term" component={OfferScreen} />
    </Tab.Navigator>
  );
}
