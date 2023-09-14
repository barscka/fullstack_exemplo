import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'

const rootReducers = combineReducers(
    {
        productStore:productReducer
    }
)

export default configureStore({
  reducer: rootReducers
})