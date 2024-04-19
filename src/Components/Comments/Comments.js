import React, { useState, useEffect } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import InputComment from "./InputComment/InputComment";
import CommentList from "./CommentList/CommentList";
import { submitComment } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    selectedItem: state.selectedItem,
    comments: state.comments,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitComment: (userName, userComment, itemId) =>
      dispatch(submitComment(userName, userComment, itemId)),
  };
};

const Comments = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleSubmitComment = () => {
    if (inputValue !== "" && inputValue2 !== "") {
      props.submitComment(inputValue, inputValue2, props.selectedItem.id);
      setInputValue("");
      setInputValue2("");
    } else {
      Alert.alert("Invalid Input!", "Please Enter A Valid Input...");
    }
  };

  let inputView = null;
  if (props.token != null) {
    inputView = (
      <View style={{ border: "1px solid grey", borderRadius: 10 }}>
        <InputComment
          inputValue={inputValue}
          setInputValue={setInputValue}
          inputValue2={inputValue2}
          setInputValue2={setInputValue2}
        />
        <View>
          <Pressable
            style={styles.btn}
            onPress={() => {
              handleSubmitComment();
            }}
          >
            <Text style={styles.txt}>Add Comment</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    inputView = (
      <Pressable
        style={{ ...styles.btn, padding: 0 }}
        onPress={() => {
          props.navigation.navigate("Login Screen");
        }}
      >
        <Text style={{ ...styles.txt, backgroundColor: "red" }}>
          Login To Comment
        </Text>
      </Pressable>
    );
  }

  useEffect(() => {
    if (props.selectedItem) {
      props.navigation.setOptions({
        title: props.selectedItem.title + " Comments",
      });
    }
  }, [props.selectedItem]);

  return (
    <View style={styles.container}>
      {inputView}
      <View style={styles.hr} />
      <CommentList comments={props.comments} itemId={props.selectedItem.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  itemTitle: {
    backgroundColor: "#FFC107",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
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
  hr: {
    borderBottomColor: "#343A40",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
