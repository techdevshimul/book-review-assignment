import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchComments, fetchItems } from '../../redux/actionCreators';
import { View } from 'react-native';
import { Text } from 'react-native';

const mapStateToProps = state => {
    return {
        books: state.books,
        categories: state.categories
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

    return (
        <View>
            <Text>Home</Text>
            
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);