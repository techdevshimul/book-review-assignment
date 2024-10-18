import axios from "axios";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { baseUrl, categoriesUrl, extensionFormat } from "../../redux/database";

const CategoryForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const handleSubmitCategory = () => {
    if (inputValue !== "" && inputValue2 !== "" && inputValue3 !== "") {
      const categoryItem = {
        title: inputValue,
        image: inputValue2,
        details: inputValue3,
      };

      axios
        .post(baseUrl + categoriesUrl + extensionFormat, categoryItem)
        .then((response) => {
          console.log(response.data);
          // Alert.alert("Invalid Input!", response.data);
          setInputValue("");
          setInputValue2("");
          setInputValue3("");
        })
        .catch((err) => {
          console.log(err);
          // Alert.alert("Invalid Input!", err);
        });
    } else {
      Alert.alert("Invalid Input!", "Please Enter A Valid Input...");
    }
  };

  return (
    <View style={styles.inputView}>
      <View>
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
            padding: 7,
          }}
          placeholder="Title"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
            padding: 7,
          }}
          placeholder="Image Url"
          value={inputValue2}
          onChangeText={(text) => setInputValue2(text)}
        />
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
            padding: 7,
          }}
          placeholder="Details"
          value={inputValue3}
          onChangeText={(text) => setInputValue3(text)}
        />
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          handleSubmitCategory();
        }}
      >
        <Text style={styles.txt}>Add Category</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    padding: 10,
    width: "100%",
    marginTop: 0,
  },
  inputs: {
    marginTop: 10,
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    padding: 10,
    width: "100%",
  },
  txt: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default CategoryForm;
