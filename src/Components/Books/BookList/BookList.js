import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BookItem from "../BookItem/BookItem";

const BookList = (props) => {
  let itemsList = null;
  if (props.items.length != 0) {
    itemsList = (
      <FlatList
        data={props.items}
        renderItem={(info) => (
          <BookItem
            item={info.item}
            onItemPressed={() => props.handleSelectedItem(info.item.id)}
            style={styles.listItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  } else {
    itemsList = (
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#DC3545",
          padding: 2,
        }}
      >
        Book List Is Empty!
      </Text>
    );
  }
  return <View style={styles.container}>{itemsList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    fontWeight: "bold",
  },
});

export default BookList;
