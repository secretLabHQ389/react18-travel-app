import {
	createAsyncThunk, 
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {getUsers} from '../apis/properties'

//state defined on mount, to be changed from components:
const PropertiesInitialState = {
	loading: false,
	properties: ['No properties found.'],
    selectedProperty: 'Welcome! Pick a Category to Begin!'
}

//TODO: define users type:
type users = any
type UserObject = {
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		}
	},
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	},
	email: string,
	id: number,
	name: string,
	phone: string,
	username: string,
	website: string
}

//handler for api calls to be called in components:
export const getUsersHandler = createAsyncThunk(
    'properties/getUsers',
    async (
        
      ) => {
          const { data } = await getUsers()
          return (await data) as UserObject[]
  })

//reducer to manage a portion of client state:
const propertySlice = createSlice({
    name: 'properties',
    initialState: PropertiesInitialState,
    reducers: {
        setCurrentPropertyReducer: (state, payload) => {
			state.selectedProperty = payload.payload
		}
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersHandler.pending, (state) => {
			state.loading = true
		})

		builder.addCase(getUsersHandler.fulfilled, (state, {payload}) => {
			state.loading = false
			const addresses: any = []
			payload && payload.map((user: UserObject) => {
				addresses.push(user.address.city)
			})
			state.properties = addresses
		})

		builder.addCase(getUsersHandler.rejected, (state, {payload}) => {
			state.loading = false
		})
    }
})

//plain action creators to be called in components:
export const setCurrentProperty = (currentProperty: string) => (dispatch: any) => {
	dispatch(setCurrentPropertyReducer(currentProperty))
}

//state selectors to be called in components:
export const selectProperties = (state: any) => state.properties

export const propertiesSelector = createSelector(
	[selectProperties],
	state => state.properties
)

export const selectedPropertySelector = createSelector(
	[selectProperties],
	state => state.selectedProperty
)

//export reducers for out of scope calls:
export const {
	setCurrentPropertyReducer
} = propertySlice.actions

//store export for rootReducer:
export default propertySlice.reducer