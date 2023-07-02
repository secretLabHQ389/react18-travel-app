import { combineReducers } from '@reduxjs/toolkit'
import propertyReducer from './propertySlice'

const rootReducer = combineReducers({
    properties: propertyReducer
  })
  
  export default rootReducer