import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = (props) => {
  let categoryList = null;
  if (props.categories.length != 0) {
    categoryList = (
      <FlatList
        data={props.categories}
        renderItem={(info) => (
          <CategoryItem
            item={info.item}
            onItemPressed={() => props.handleSelectedCategory(info.item.id)}
            style={styles.listItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  } else {
    categoryList = (
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#DC3545",
          padding: 2,
        }}
      >
        Category List Is Empty!
      </Text>
    );
  }
  return <View style={styles.container}>{categoryList}</View>;
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

export default CategoryList;
