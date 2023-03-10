import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reducers';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});
