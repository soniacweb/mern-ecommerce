import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, 
         PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
         PRODUCT_CREATE_REVIEW_REQUEST, PRODUCT_CREATE_REVIEW_SUCCESS, PRODUCT_CREATE_REVIEW_FAIL 
       } 
    from '../constants/productConstants'

// import { useDispatch, useSelector } from 'react-redux'
import { logout } from './userActions'

import axios from 'axios'

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/bestsellers')
           dispatch({ 
               type: PRODUCT_LIST_SUCCESS,
               payload: data
             })

    } catch(er) {
        dispatch({ 
            type: PRODUCT_LIST_FAIL,
            payload: er.response && er.response.data.message ? er.response.data.message : er.message
        })
    }
} 

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/bestsellers/${id}`)
           dispatch({ 
               type: PRODUCT_DETAILS_SUCCESS,
               payload: data
             })

    } catch(er) {
        dispatch({ 
            type: PRODUCT_DETAILS_FAIL,
            payload: er.response && er.response.data.message ? er.response.data.message : er.message
        })
    }
} 

export const createProductReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.post(`/api/bestsellers/${productId}/reviews`, review, config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload: message,
      })
    }
  }