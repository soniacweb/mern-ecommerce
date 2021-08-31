import axios from 'axios'

import { FAVES_ADD_ITEM, FAVES_REMOVE_ITEM } from '../constants/favesConstants'

export const addToFaves = (id, qty) => async(dispatch, getState) => {

    const { data } = await axios.get(`/api/bestsellers/${id}`)
    dispatch({
        type: FAVES_ADD_ITEM,
        payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty 
        }
    })
    localStorage.setItem('faveItems', JSON.stringify(getState().faves.faveItems))
}

export const removeFromFaves = (id) => (dispatch, getState) => {
    dispatch({
      type: FAVES_REMOVE_ITEM,
      payload: id,
    })
  
    localStorage.setItem('faveItems', JSON.stringify(getState().faves.cartItems))
  }