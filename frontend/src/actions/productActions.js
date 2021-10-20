import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_TOP_FAIL,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_REQUEST,
    PRODUCT_ELECTRONICS_SUCCESS,
    PRODUCT_ELECTRONICS_REQUEST,
    PRODUCT_ELECTRONICS_FAIL,
    PRODUCT_SMARTPHONES_REQUEST,
    PRODUCT_SMARTPHONES_SUCCESS,
    PRODUCT_SMARTPHONES_FAIL,
    PRODUCT_COMPUTERS_REQUEST,
    PRODUCT_COMPUTERS_SUCCESS,
    PRODUCT_COMPUTERS_FAIL,
} from '../constants/productConstants'

export const listProducts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}





export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const { data } = await axios.get(`/api/products/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/products/${id}`, config)
  
      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      })
    } catch (error) {
      dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:   
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      })
    }
  }

  
  export const createProduct = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/products`, {}, config)
  
      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload:error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      })
    }
  }
  
  export const updateProduct = (product) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
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
  
      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      )
  
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
 
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload:error.response && error.response.data.message
          ? error.response.data.message
          : error.message
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
  
      await axios.post(`/api/products/${productId}/reviews`, review, config)
  
      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      })
    }
  }
  
  export const listTopProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_TOP_REQUEST })
  
      const { data } = await axios.get(`/api/products/top`)
  
      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const listElectronics = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_ELECTRONICS_REQUEST })
  
      const { data } = await axios.get(`/api/products/electronics`)
  
      dispatch({
        type: PRODUCT_ELECTRONICS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_ELECTRONICS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
  export const listSmartPhones = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_SMARTPHONES_REQUEST })
  
      const { data } = await axios.get(`/api/products/smartphones`)
  
      dispatch({
        type: PRODUCT_SMARTPHONES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_SMARTPHONES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  
  export const listComputers = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_COMPUTERS_REQUEST })
  
      const { data } = await axios.get(`/api/products/computers`)
  
      dispatch({
        type: PRODUCT_COMPUTERS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_COMPUTERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


