import { configureStore } from '@reduxjs/toolkit';
import timezoneReducer from './reducer/timezoneReducer';

export const store = configureStore({
  reducer: {
    timezone: timezoneReducer,
  },
});
