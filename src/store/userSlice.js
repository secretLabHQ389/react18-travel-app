import {
	createSlice
} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const MockedUsersInitialState = {
	loading: false,
	loggedIn: false
}

//reducer:
const userSlice = createSlice({
    name: 'mockedUser',
    initialState: MockedUsersInitialState,
    reducers: {
        setLoggedInReducer: (state, payload) => {
			state.loggedIn = payload
		}
    },
    extraReducers: {}
})

//plain action creators:
export const mockedLogIn = loginPayload => dispatch => {
    console.log('mockedLogIn loginPayload: ', loginPayload.username , loginPayload.password)
    {loginPayload.username === 'Mocked User' && loginPayload.password === 'fancyPassword#1' && dispatch(setLoggedInReducer(true))}
}

export const selectMockedUser = (state) => state.user

//called in HOC around Outlet in routes:
export const loggedInStatusSelector = createSelector(
	[selectMockedUser],
	state => state.loggedIn
)

export const {
	setLoggedInReducer
} = userSlice.actions

//store export:
export default userSlice.reducer