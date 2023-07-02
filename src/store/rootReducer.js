import { combineReducers } from '@reduxjs/toolkit'
import propertyReducer from './propertySlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
    properties: propertyReducer,
    user: userReducer
  })
  
  export default rootReducer