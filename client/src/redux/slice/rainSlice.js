import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRain = createAsyncThunk('getRain', async () => {
	try {
		const res = await axios.get('/api/rain/get');
		return res.data.rain.state;
	} catch (error) {}
});

const rainSlice = createSlice({
	name: 'rain',
	initialState: {
		value: null,
	},
	reducers: {
		update(state, action) {
			state.value = action.payload;
		},
	},
	extraReducers: {
		[getRain.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default rainSlice;
