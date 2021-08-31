import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, 
         PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL 
       } 
    from '../constants/productConstants'

// import { useDispatch, useSelector } from 'react-redux'

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
