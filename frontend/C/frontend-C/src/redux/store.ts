import { configureStore } from '@reduxjs/toolkit';
import wordListReducer from './wordListSlice';

export const store = configureStore({
  reducer: {
    wordList: wordListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {wordList: wordListState}
export type AppDispatch = typeof store.dispatch;
