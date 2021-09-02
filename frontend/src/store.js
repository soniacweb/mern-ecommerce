import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer, productReviewCreateReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { favesReducer } from './reducers/favesReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productReviewCreate: productReviewCreateReducer,  
    cart: cartReducer,
    fave: favesReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const faveItemsFromStorage = localStorage.getItem('faveItems') ? JSON.parse(localStorage.getItem('faveItems')): []

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : []


const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    fave: { faveItems: faveItemsFromStorage },
    userLogin: { userInfo: userFromStorage }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 