import * as actionTypes from "./actionTypes";

const initState = {
    items: [],
    itemLoading: true,
    itemErr: false,
    selectedItem: null,

    comments: [],
    commentLoading: true,
    commentErr: false,

    categories: [],
    categoryLoading: true,
    categoryErr: false,
    selectedCategory: null,

    commentSubmitFailedMsg: null,
    commentSubmitSuccess: null,
    commentSubmitLoading: false,

    isAuth: false,
    token: null,
    userId: null
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.LOAD_ITEMS:
            let items = [];
            for (let key in action.payload) {
                items.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                items: items,
                itemLoading: false,
            }
        case actionTypes.ITEM_LOAD_FAILED:
            return {
                ...state,
                itemErr: true,
                itemLoading: false,
            }

        case actionTypes.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                comments: comments,
                commentLoading: false,
            }
        case actionTypes.COMMENT_LOAD_FAILED:
            return {
                ...state,
                commentErr: true,
                commentLoading: false,
            }

        case actionTypes.LOAD_CATEGORIES:
            let categories = [];
            for (let key in action.payload) {
                categories.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                categories: categories,
                categoryLoading: false,
            }
        case actionTypes.CATEGORY_LOAD_FAILED:
            return {
                ...state,
                categoryErr: true,
                categoryLoading: false,
            }

        case actionTypes.SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.payload
            }
        case actionTypes.SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case actionTypes.COMMENT_SUBMIT_FAILED:
            return {
                ...state,
                commentSubmitFailedMsg: action.payload,
            }
        case actionTypes.COMMENT_SUBMIT_SUCCESS:
            return {
                ...state,
                commentSubmitSuccess: action.payload
            }
        case actionTypes.COMMENT_SUBMIT_LOADING:
            return {
                ...state,
                commentSubmitLoading: action.payload,
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload.token,
                userId: action.payload.userId
            }

        default:
            return state;
    }
}