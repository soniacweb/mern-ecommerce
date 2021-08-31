import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { favesReducer } from './reducers/favesReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    fave: favesReducer


})

const cartItemsForStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const faveItemsForStorage = localStorage.getItem('faveItems') ? JSON.parse(localStorage.getItem('faveItems')): []
const initialState= {
    cart: { cartItems: cartItemsForStorage },
    faves: { faveITems: faveItemsForStorage }
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 