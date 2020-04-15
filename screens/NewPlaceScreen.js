import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
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
