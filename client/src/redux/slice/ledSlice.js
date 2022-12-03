import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLed = createAsyncThunk('getLed', async () => {
	try {
		const res = await axios.get('/api/led/get');
		return res.data.led.state;
	} catch (error) {}
});

export const toggleLed = createAsyncThunk('toggleLed', async () => {
	console.log('Toggle ne');
	try {
		const res = await axios.get('/api/led/toggle');
		console.log(res);
		return res.data.led.state;
	} catch (error) {}
});

const ledSlice = createSlice({
	name: 'led',
	initialState: {
		value: null,
	},
	reducers: {},
	extraReducers: {
		[getLed.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
		[toggleLed.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default ledSlice;
