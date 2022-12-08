import { configureStore } from '@reduxjs/toolkit';
import dhtSlice from './slice/dhtSlice';
import gasSlice from './slice/gasSlice';
import ldrSlice from './slice/ldrSlice';
import modalSlice from './slice/modalSlice';
import ledSlice from './slice/ledSlice';
import socketSlice from './slice/socketSlice';
import utsSlice from './slice/utsSlice';
import rainSlice from './slice/rainSlice';
import motorSlice from './slice/motorSlice';

export const store = configureStore({
	reducer: {
		gas: gasSlice.reducer,
		ldr: ldrSlice.reducer,
		dht: dhtSlice.reducer,
		modal: modalSlice.reducer,
		led: ledSlice.reducer,
		socket: socketSlice.reducer,
		uts: utsSlice.reducer,
		rain: rainSlice.reducer,
		motor: motorSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
