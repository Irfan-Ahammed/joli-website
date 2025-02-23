import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    createdJob: [],
    createdSingleJob: null,
    appliedJobs: [],
    appliedSingleJobs: null
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJob: (state, action) => {
      state.createdJob = action.payload;
    },
    CreatingJob: (state, action) => {
      if (!Array.isArray(state.createdJob)) {
        state.createdJob = [];
      }
      state.createdJob = [...state.createdJob, action.payload];
    },
    UpdatingJob: (state, action) => {
      state.createdJob = state.createdJob.map((job) =>
        job._id === action.payload._id ? action.payload : job
      );
      
      // update singleJob if it's the same job being edited
      if (state.singleJob && state.singleJob._id === action.payload._id) {
        state.singleJob = action.payload;
      }
    },
    setAppliedJob: (state, action) => {
      state.appliedJobs = action.payload;
    }
  }
});

export const {
  setAllJobs,
  setSingleJob,
  CreatingJob,
  setAllAdminJob,
  setAppliedJob,
  UpdatingJob
} = jobSlice.actions;
export default jobSlice.reducer;
