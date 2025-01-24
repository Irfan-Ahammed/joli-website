import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    createdJob: [],
    createdSingleJob: null,
    appliedJobs: [],
    appliedSingleJobs: null,
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
        state.createdJob = []; // Reset to an empty array if corrupted
      }
      state.createdJob = [...state.createdJob, action.payload];
    },
    setAppliedJob: (state, action) => {
      if (!Array.isArray(state.appliedJobs)) {
        state.appliedJobs=[]
      }
      state.appliedJobs = [...state.appliedJobs,action.payload]
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  CreatingJob,
  setAllAdminJob,
  setAppliedJob,
} = jobSlice.actions;
export default jobSlice.reducer;
