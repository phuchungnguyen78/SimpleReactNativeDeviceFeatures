import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import * as placesAction from "../store/action";
import ImagePicker from "../components/ImageSelector";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const imageTakeHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const savePlaceHandler = () => {
    dispatch(placesAction.addPlace(titleValue, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTake={imageTakeHandler} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        ></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

const navigationOptions = (navData) => {
  return {
    title: "New Place",
  };
};

export default {
  screen: NewPlaceScreen,
  navigationOptions: navigationOptions,
};
