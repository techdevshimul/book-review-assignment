import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { selectedCategoryFunc } from "../../redux/actionCreators";
import CategoryList from "./CategoryList/CategoryList";

const mapStateToProps = (state) => {
  return {
    items: state.items,
    comments: state.comments,
    categories: state.categories,
    selectedItem: state.selectedItem,
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedCategoryFunc: (category) =>
      dispatch(selectedCategoryFunc(category)),
  };
};

const Categories = (props) => {
  const handleSelectedCategory = (id) => {
    const category = props.categories.find((category) => {
      return category.id === id;
    });
    props.selectedCategoryFunc(category);
    props.navigation.navigate("Category");
  };

  return (
    <View style={styles.container}>
      <CategoryList
        categories={props.categories}
        handleSelectedCategory={handleSelectedCategory}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

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
