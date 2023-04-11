import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobsSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
