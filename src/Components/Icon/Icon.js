import React from 'react';
import { Ionicons } from "@expo/vector-icons"
import { Pressable } from 'react-native';

const Icon = props => {
    return (
        <Pressable onPress={props.action} style={{ ...props.iconStyle }}>
            <Ionicons name={props.name} size={props.size} color={props.color} />
        </Pressable>
    )
}

export default Icon;