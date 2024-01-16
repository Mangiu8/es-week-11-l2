// reducer.js
import { createReducer } from "@reduxjs/toolkit";
import { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure } from "../action/jobAction";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const reduceJob = createReducer(initialState, {
  [fetchJobsRequest]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchJobsSuccess]: (state, action) => {
    state.loading = false;
    state.jobs = action.payload;
  },
  [fetchJobsFailure]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export default reduceJob;
