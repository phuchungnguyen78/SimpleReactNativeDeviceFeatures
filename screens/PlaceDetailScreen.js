import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View>
      <Text>Place Detail Screen</Text>
    </View>
  );
};

const navigationOptions = (navData) => {
  return {
    title: navData.navigation.getParam("placeTitle"),
  };
};

const styles = StyleSheet.create({});

export default {
  screen: PlaceDetailScreen,
  navigationOptions: navigationOptions,
};
