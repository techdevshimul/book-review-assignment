import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import BookList from "./BookList/BookList";
import { selectedItemFunc } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    items: state.items,
    comments: state.comments,
    categories: state.categories,
    selectedItem: state.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedItemFunc: (item) => dispatch(selectedItemFunc(item)),
  };
};

const Books = (props) => {
  const handleSelectedItem = (id) => {
    const item = props.items.find((item) => {
      return item.id === id;
    });
    props.selectedItemFunc(item);
    props.navigation.navigate("Book Details");
  };

  return (
    <View style={styles.container}>
      <BookList items={props.items} handleSelectedItem={handleSelectedItem} />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },
  btn: {
    padding: 10,
    width: "100%",
    marginTop: 0,
  },
  txt: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },
});
