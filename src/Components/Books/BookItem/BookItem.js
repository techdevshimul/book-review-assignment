import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const BookItem = (props) => {
  return (
    <Pressable onPress={props.onItemPressed}>
      <View style={styles.container}>
        {props.item.image && (
          <Image style={styles.image} source={{ uri: props.item.image }} />
        )}
        <View style={styles.details}>
          <Text>{props.item.title}</Text>
          <Text style={styles.decsription} numberOfLines={3}>
            {" "}
            {props.item.desc}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  decsription: {
    color: "#6e6969",
  },
});

export default BookItem;
