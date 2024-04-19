import React from "react";
import { View, Text, StyleSheet } from "react-native";
import dateFormat from "dateformat";

const CommentItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ padding: 5, color: "#fff" }}>
        Name : {props.userName} {"\n"}Comment : {props.comment} {"\n"}Date :{" "}
        {dateFormat(props.time, "dS mmmm yyyy, h:MM TT")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "#6C757D",
    borderRadius: 10,
    fontWeight: "bold",
  },
});

export default CommentItem;
