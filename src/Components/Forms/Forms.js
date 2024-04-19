import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryForm from "./CategoryForm";
import BookForm from "./BookForm";

const Forms = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text style={styles.txt}>Categories Form :</Text>
        <CategoryForm />
        <View style={styles.hr} />
        <Text style={styles.txt}>Book Form :</Text>
        <BookForm />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  txt: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 20
  },
  hr: {
    borderBottomColor: "#343A40",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default Forms;
