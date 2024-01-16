// jobActions.js
import { createAction } from "@reduxjs/toolkit";

export const fetchJobsRequest = createAction("FETCH_JOBS_REQUEST");
export const fetchJobsSuccess = createAction("FETCH_JOBS_SUCCESS");
export const fetchJobsFailure = createAction("FETCH_JOBS_FAILURE");

export const fetchJobs = (query) => async (dispatch) => {
  dispatch(fetchJobsRequest());

  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);

    if (response.ok) {
      const { data } = await response.json();
      dispatch(fetchJobsSuccess(data));
    } else {
      dispatch(fetchJobsFailure("Error fetching results"));
    }
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};
