import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 37.4,
    longitude: -112.64,
    latitudeDelta: 0.0822,
    longitudeDelta: 0.0423,
  };
  return <MapView style={styles.map} region={mapRegion} />;
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
