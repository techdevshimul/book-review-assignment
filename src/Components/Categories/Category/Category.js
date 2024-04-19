import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectedItemFunc } from "../../../redux/actionCreators";
import { View, FlatList, StyleSheet, Text } from "react-native";
import BookItem from "../../Books/BookItem/BookItem";

const mapStateToProps = (state) => {
  return {
    selectedCategory: state.selectedCategory,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedItemFunc: (item) => dispatch(selectedItemFunc(item)),
  };
};

const Category = (props) => {
  const handleSelectedItem = (id) => {
    const item = props.items.find((item) => {
      return item.id === id;
    });
    props.selectedItemFunc(item);
    props.navigation.navigate("Book Details");
  };

  let items = props.items.filter(
    (item) => item.categoryName === props.selectedCategory.title
  );

  let itemsList = null;
  if (items.length !== 0) {
    itemsList = (<FlatList
      data={items}
      renderItem={(info) => (
        <BookItem
          item={info.item}
          onItemPressed={() => handleSelectedItem(info.item.id)}
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
        Please Create Atleast One Account To Use This App!
      </Text>
    );
  }
  useEffect(() => {
    if (props.selectedCategory) {
      props.navigation.setOptions({
        title: `${props.selectedCategory.title} Category`,
      });
    }
  }, [props.selectedCategory]);

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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
