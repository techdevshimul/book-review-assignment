import React from "react";
import { FlatList, Text, View } from "react-native";
import CommentItem from "../CommentItem/CommentItem";

const CommentList = (props) => {
  let comments = props.comments.filter((item) => item.itemId === props.itemId);
  let reverseComments = [...comments].reverse();
  let commentList = null;

  if (comments.length !== 0) {
    commentList = (
      <FlatList
        data={reverseComments}
        renderItem={(info) => (
          <CommentItem
            userName={info.item.userName}
            comment={info.item.comment}
            time={info.item.addTime}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  } else {
    commentList = <Text style={{ textAlign: "center", fontSize: 16 }}>Be The First One To Comment On This Book!</Text>;
  }

  return <View style={{ flex: 1 }}>{commentList}</View>;
};

export default CommentList;
