import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchComments, fetchItems } from '../../redux/actionCreators';
import { Image, View, Text, Pressable, StyleSheet } from 'react-native';

const mapStateToProps = state => {
    return {
        books: state.books,
        categories: state.categories,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchComments: () => dispatch(fetchComments())
    }
}

const Home = props => {
    useEffect(() => {
        props.fetchItems();
        props.fetchCategories();
        props.fetchComments();

    })

    let login = null;
    if (props.token === null) {
        login = (
            <Pressable style={styles.btn}
                onPress={() => {
                    props.navigation.navigate("Login Screen");
                }}
            >
                <Text style={{ ...styles.txt, backgroundColor: "red" }}>Login</Text>
            </Pressable >)
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://s26162.pcdn.co/wp-content/uploads/2023/06/overflowing-bookcases.jpg" }}
                style={styles.image}
            />
            <Text style={styles.desc}>Handy Library is not just an app; it's a comprehensive solution for managing any book collection. Whether you're a passionate reader with an extensive home library, a teacher managing a class library, or a librarian overseeing a school or community library, Handy Library makes cataloging and organizing books a breeze.
            </Text>
            <Pressable style={styles.btn}
                onPress={() => {
                    props.navigation.navigate("Books Screen");
                }}
            >
                <Text style={styles.txt}>All Books</Text>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => {
                    props.navigation.navigate("Categories Screen");
                }}
            >
                <Text style={styles.txt}>All Categories</Text>
            </Pressable>
            {login}
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 10
    },
    btn: {
        padding: 10,
        width: "100%",
        marginTop: 0,
    },
    txt: {
        backgroundColor: "#28A745",
        padding: 10,
        borderRadius: 10,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15
    },
    desc: {
        padding: 10,
        borderRadius: 10,
        textAlign: "justify",
        fontWeight: "bold",
        fontSize: 16,

    },
    image: {
        width: "100%",
        height: 300
    }
})