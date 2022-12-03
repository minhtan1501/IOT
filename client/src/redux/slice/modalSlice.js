import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false, message: '' };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		show(state, action) {
			state.isOpen = true;
			state.message = action.payload.message;
			return state;
		},
		close(state, action) {
			state = initialState;
			return state;
		},
	},
});

export default modalSlice;
