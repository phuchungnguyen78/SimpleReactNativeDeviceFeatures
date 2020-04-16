import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/Colors";

const MapScreen = (props) => {
  const initialLocation = props.navigation.getParam("initialLocation");
  const readonly = props.navigation.getParam("readonly");
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.4,
    longitude: initialLocation ? initialLocation.lng : -112.64,
    latitudeDelta: 0.0822,
    longitudeDelta: 0.0423,
  };

  const selectLocationHandler = (event) => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }

    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({ saveLocation: savePickedLocationHandler });
  }, [savePickedLocationHandler]);

  let markerCoordinate;

  if (selectedLocation) {
    markerCoordinate = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      onPress={selectLocationHandler}
      style={styles.map}
      region={mapRegion}
    >
      {markerCoordinate && (
        <Marker title="Picked Location" coordinate={markerCoordinate}></Marker>
      )}
    </MapView>
  );
};

const navigationOptions = (navData) => {
  const saveFn = navData.navigation.getParam("saveLocation");
  const readonly = navData.navigation.getParam("readonly");
  if (readonly) {
    return {};
  }
  return {
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
});

export default {
  screen: MapScreen,
  navigationOptions: navigationOptions,
};
