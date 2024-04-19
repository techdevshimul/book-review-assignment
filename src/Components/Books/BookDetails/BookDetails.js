import React, { useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem,
  };
};

const BookDetails = (props) => {
  const handleCommentBtn = () => {
    props.navigation.navigate("Comments");
  };

  useEffect(() => {
    if (props.selectedItem) {
      props.navigation.setOptions({ title: props.selectedItem.title });
    }
  }, [props.selectedItem]);

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {props.selectedItem.image && (
          <Image
            style={styles.image}
            source={{ uri: props.selectedItem.image }}
          />
        )}
        <View style={styles.hr} />
        <Text style={styles.title}>Book Name : {props.selectedItem.title}</Text>
        <Text style={styles.bookDetail}>
          Author : {props.selectedItem.author} {"\n"}Category :{" "}
          {props.selectedItem.categoryName}
        </Text>
        <View style={styles.hr} />
        <Pressable onPress={handleCommentBtn}>
          <View style={styles.commentView}>
            <Text style={styles.commentBtn}>View Or Add Comments</Text>
          </View>
        </Pressable>
        <View style={styles.hr} />
        <Text style={styles.descTitle}>Description :</Text>
        <Text style={styles.desc}>{props.selectedItem.desc}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    color: "#343A40",
    fontSize: 18,
    fontWeight: "bold",
  },
  bookDetail: {
    fontSize: 15,
    color: "#343A40",
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 5,
  },
  descTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#343A40",
  },
  desc: {
    color: "#6C757D",
    textAlign: "justify",
    marginTop: 10,
  },
  commentBtn: {
    color: "white",
    fontSize: 16,
    padding: 10,
    fontWeight: "bold",
  },
  commentView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 10,
  },
  hr: {
    borderBottomColor: "#343A40",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 10,
  }
});

export default connect(mapStateToProps)(BookDetails);
