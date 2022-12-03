import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGas = createAsyncThunk('getGas', async () => {
	try {
		const res = await axios.get('/api/gas/get');
		return res.data.gas.value;
	} catch (error) {}
});

const gasSlice = createSlice({
	name: 'gas',
	initialState: {
		value: null,
	},
	reducers: {
		update(state, action) {},
	},
	extraReducers: {
		[getGas.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default gasSlice;
