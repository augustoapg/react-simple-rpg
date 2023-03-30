import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../redux/heroSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
