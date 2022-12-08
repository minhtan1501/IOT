import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMotor = createAsyncThunk('getMotor', async () => {
	try {
		const res = await axios.get('/api/motor/get');
		return res.data.motor.state;
	} catch (error) {}
});

export const updateMotor = createAsyncThunk('updateMotor', async (state) => {
	try {
		const res = await axios.post('/api/motor/update', { state });
		return res.data.motor.state;
	} catch (error) {}
});

const motorSlice = createSlice({
	name: 'motor',
	initialState: {
		value: false,
	},
	reducers: {
		update(state, action) {
			state.value = action.payload;
		},
	},
	extraReducers: {
		[getMotor.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.value = action.payload;
		},
		[updateMotor.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default motorSlice;
