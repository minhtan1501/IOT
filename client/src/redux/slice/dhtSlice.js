import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDht = createAsyncThunk("getDht", async () => {
  try {
    const res = await axios.get("/api/dht/get");
    return { temp: res.data.dht.temperature, humi: res.data.dht.humidity };
  } catch (error) {}
});

export const getAllDht = createAsyncThunk("getAllDht", async () => {
  try {
    const res = await axios.get("/api/dht/get-all");
    return res.data.dht;
  } catch (error) {}
});

const dhtSlice = createSlice({
  name: "dht",
  initialState: {
    temp: null,
    humi: null,
    data: [],
  },
  reducers: {
    update(state, action) {
      state.data.slice(-1);
      state.data.unshift(action.payload);
      state.temp = action.payload.temperature;
      state.humi = action.payload.humidity;
    },
  },
  extraReducers: {
    [getDht.fulfilled]: (state, action) => {
      state.temp = action.payload.temp;
      state.humi = action.payload.humi;
    },
    [getAllDht.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default dhtSlice;
