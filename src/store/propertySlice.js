import {
	createAsyncThunk, 
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {getUsers} from '../apis/properties'

const PropertiesInitialState = {
	loading: false,
	properties: ['No properties found.'],
    selectedProperty: 'Welcome! Pick a Category to Begin!'
}

export const getUsersHandler = createAsyncThunk(
    'properties/getUsers',
    async (
        
      ) => {
          const users = await getUsers()
		  //This works fine:
		  console.log('users: ', users.data)
          return users
  })

//reducer:
const propertySlice = createSlice({
    name: 'properties',
    initialState: PropertiesInitialState,
    reducers: {
        setCurrentPropertyReducer: (state, payload) => {
			state.selectedProperty = payload.payload
		}
    },
    extraReducers: {
        [getUsers.pending](state) {
			state.loading = true
		},

		[getUsers.fulfilled](state, {payload}) {
			state.loading = false
			console.log('payload: ', payload)
		},

		[getUsers.rejected](state) {
			state.loading = false
		}
    }
})

//plain action creators:
export const setCurrentProperty = currentProperty => dispatch => {
	dispatch(setCurrentPropertyReducer(currentProperty))
}

export const selectProperties = (state) => state.properties

export const propertiesSelector = createSelector(
	[selectProperties],
	state => state.properties
)

export const selectedPropertySelector = createSelector(
	[selectProperties],
	state => state.selectedProperty
)

export const {
	setCurrentPropertyReducer
} = propertySlice.actions

//store export:
export default propertySlice.reducer