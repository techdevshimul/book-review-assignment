import axios from "axios";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { baseUrl, extensionFormat, itemsUrl } from "../../redux/database";

const BookForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");

  const handleSubmitBook = () => {
    if (
      inputValue !== "" && inputValue2 !== "" && inputValue3 !== "" && inputValue4 !== "" && inputValue5 !== ""
    ) {
      const bookItem = {
        title: inputValue,
        image: inputValue2,
        categoryName: inputValue3,
        author: inputValue4,
        desc: inputValue5,
      };

      axios
        .post(baseUrl + itemsUrl + extensionFormat, bookItem)
        .then((response) => {
          console.log(response.data);
          // Alert.alert("Invalid Input!", err);
          setInputValue("");
          setInputValue2("");
          setInputValue3("");
          setInputValue4("");
          setInputValue5("");
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
          placeholder="Category Name"
          value={inputValue3}
          onChangeText={(text) => setInputValue3(text)}
        />
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
            padding: 7,
          }}
          placeholder="Author"
          value={inputValue4}
          onChangeText={(text) => setInputValue4(text)}
        />
        <TextInput
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "gray",
            padding: 7,
          }}
          placeholder="Description"
          value={inputValue5}
          onChangeText={(text) => setInputValue5(text)}
        />
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          handleSubmitBook();
        }}
      >
        <Text style={styles.txt}>Add Book</Text>
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

export default BookForm;
