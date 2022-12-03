import { configureStore } from '@reduxjs/toolkit';
import dhtSlice from './slice/dhtSlice';
import gasSlice from './slice/gasSlice';
import ldrSlice from './slice/ldrSlice';
import modalSlice from './slice/modalSlice';
import ledSlice from './slice/ledSlice';
import socketSlice from './slice/socketSlice';

export const store = configureStore({
	reducer: {
		gas: gasSlice.reducer,
		ldr: ldrSlice.reducer,
		dht: dhtSlice.reducer,
		modal: modalSlice.reducer,
		led: ledSlice.reducer,
		socket: socketSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
