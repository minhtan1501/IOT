import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLdr = createAsyncThunk('getLdr', async () => {
	try {
		const res = await axios.get('/api/ldr/get');
		return res.data.ldr.value;
	} catch (error) {}
});

const ldrSlice = createSlice({
	name: 'ldr',
	initialState: {
		value: null,
	},
	reducers: {
		update(state, action) {},
	},
	extraReducers: {
		[getLdr.fulfilled]: (state, action) => {
			state.value = action.payload;
		},
	},
});

export default ldrSlice;
