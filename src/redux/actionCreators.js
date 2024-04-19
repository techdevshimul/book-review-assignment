import { navigate } from "../Components/NavigationRoot";
import * as actionTypes from "./actionTypes";
import axios from 'axios';
import { baseUrl, categoriesUrl, commentsUrl, extensionFormat, itemsUrl } from './database';

export const loadItems = items => {
    return {
        type: actionTypes.LOAD_ITEMS,
        payload: items
    }
}

export const itemLoadFailed = () => {
    return {
        type: actionTypes.ITEM_LOAD_FAILED
    }
}

export const fetchItems = () => dispatch => {
    axios.get(baseUrl + itemsUrl + extensionFormat)
        .then(response => {
            dispatch(loadItems(response.data));
        })
        .catch(err => {
            dispatch(itemLoadFailed());
        })
}

export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}

export const commentLoadFailed = () => {
    return {
        type: actionTypes.COMMENT_LOAD_FAILED
    }
}

export const fetchComments = () => dispatch => {
    axios.get(baseUrl + commentsUrl + extensionFormat)
        .then(response => {
            dispatch(loadComments(response.data));
        })
        .catch(err => {
            dispatch(commentLoadFailed());
        })
}


export const loadCategories = categories => {
    return {
        type: actionTypes.LOAD_CATEGORIES,
        payload: categories
    }
}

export const categoryLoadFailed = () => {
    return {
        type: actionTypes.CATEGORY_LOAD_FAILED
    }
}

export const fetchCategories = () => dispatch => {
    axios.get(baseUrl + categoriesUrl + extensionFormat)
        .then(response => {
            dispatch(loadCategories(response.data));
        })
        .catch(err => {
            dispatch(categoryLoadFailed());
        })
}

export const selectedItemFunc = item => {
    return {
        type: actionTypes.SELECTED_ITEM,
        payload: item
    }
}

export const selectedCategoryFunc = category => {
    return {
        type: actionTypes.SELECTED_CATEGORY,
        payload: category
    }
}

export const submitComment = (userName, userComment, itemId) => dispatch => {
    dispatch(commentSubmitLoading(true));
    const comment = {
        itemId: itemId,
        userName: userName,
        comment: userComment,
        addTime: new Date(),
    }

    axios.post(baseUrl + commentsUrl + extensionFormat, comment)
        .then(response => {
            if (response.status === 200) {
                dispatch(commentSubmitLoading(false));
                dispatch(fetchComments());
                dispatch(commentSubmitSuccess("Comment Submitted Successfully!"));
                setTimeout(() => dispatch(commentSubmitSuccess(null)), 3000);
                setTimeout(() => dispatch(commentSubmitFailed(null)), 3000);
            }
        })
        .catch(err => {
            dispatch(commentSubmitSuccess(null));
            dispatch(commentSubmitLoading(false));
            dispatch(commentSubmitFailed(err.message));
            setTimeout(() => dispatch(commentSubmitSuccess(null)), 3000);
            setTimeout(() => dispatch(commentSubmitFailed(null)), 3000);
        });

}

export const commentSubmitLoading = isLoading => {
    return {
        type: actionTypes.COMMENT_SUBMIT_LOADING,
        payload: isLoading,
    }
}

export const commentSubmitFailed = errMsg => {
    return {
        type: actionTypes.COMMENT_SUBMIT_FAILED,
        payload: errMsg
    }
}
export const commentSubmitSuccess = successMsg => {
    return {
        type: actionTypes.COMMENT_SUBMIT_SUCCESS,
        payload: successMsg
    }
}


// Login

export const authUser = userData => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: userData
    }
}

export const tryAuth = (email, password, mode) => dispatch => {
    let url = "";
    const API_KEY = "AIzaSyAJm7dUXYOR_bofDgdDHnaQMy20gDltM44";
    if (mode === "signup") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
    } else if (mode === "login") {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    fetch(url + API_KEY,
        {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message)
            } else {
                dispatch(authUser({ token: data.idToken, userId: data.localId }));
                navigate("Home Screen");
            }
        })
}