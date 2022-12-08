import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUts = createAsyncThunk('getUts', async () => {
	try {
		const res = await axios.get('/api/uts/get');
		return res.data.uts.state;
	} catch (error) {}
});

const utsSlice = createSlice({
	name: 'uts',
	initialState: {
		value: false,
	},
	reducers: {
		update(state, action) {
			state.value = action.payload;
		},
	},
	extraReducers: {
		[getUts.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default utsSlice;
