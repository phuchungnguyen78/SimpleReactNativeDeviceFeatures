import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const PlacesListScreen = (props) => {
  return (
    <View>
      <Text>Hung Nguyen Places List PlacesListScreen</Text>
    </View>
  );
};

const navigationOptions = (navData) => {
  return {
    title: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

export default {
  screen: PlacesListScreen,
  navigationOptions: navigationOptions,
};
