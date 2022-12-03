import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDht = createAsyncThunk('getDht', async () => {
	try {
		const res = await axios.get('/api/dht/get');
		return { temp: res.data.dht.temperature, humi: res.data.dht.humidity };
	} catch (error) {}
});

const dhtSlice = createSlice({
	name: 'dht',
	initialState: {
		temp: null,
		humi: null,
	},
	reducers: {
		update(state, action) {},
	},
	extraReducers: {
		[getDht.fulfilled]: (state, action) => {
			state.temp = action.payload.temp;
			state.humi = action.payload.humi;
		},
	},
});

export default dhtSlice;
