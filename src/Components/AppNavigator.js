import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "./Icon/Icon";
import Login from './Login/Login';
import { connect } from 'react-redux';
import Books from './Books/Books';
import Categories from './Categories/Categories';
import Home from './Home/Home';
import BookDetails from './Books/BookDetails/BookDetails';
import Comments from './Comments/Comments';
import Category from './Categories/Category/Category';
import Forms from './Forms/Forms';

const mapStateToProps = state => {
    return {
        token: state.token,
        userId: state.userId,
        isAuth: state.isAuth
    }
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />)
            }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

function BooksStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />)
            }}>
            <Stack.Screen name="All Books" component={Books} />
            <Stack.Screen name="Book Details" component={BookDetails} />
            <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
    );
}

function CategoriesStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />)
            }}>
            <Stack.Screen name="All Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Book Details" component={BookDetails} />
            <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
    );
}

function LoginStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />)
            }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

function FormsStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />)
            }}>
            <Stack.Screen name="Forms" component={Forms} />
        </Stack.Navigator>
    );
}

const AppNavigator = props => {
    let login = null;
    if (props.isAuth === false) {
        login = (<Drawer.Screen name="Login Screen" component={LoginStack} options={{ headerShown: false }} />)
    }

    let forms = null;
    if (props.userId == "bLth2IULV4M9eUml2MNS4XBcrbP2") {
        forms = (<Drawer.Screen name="Forms Screen" component={FormsStack} options={{ headerShown: false }} />)
    }

    return (
        <Drawer.Navigator initialRouteName="Home Screen">
            <Drawer.Screen name="Home Screen" component={HomeStack} options={{ headerShown: false }} />
            <Drawer.Screen name="Books Screen" component={BooksStack} options={{ headerShown: false }} />
            <Drawer.Screen name="Categories Screen" component={CategoriesStack} options={{ headerShown: false }} />
            {forms}
            {login}
        </Drawer.Navigator>
    )
}

export default connect(mapStateToProps)(AppNavigator);