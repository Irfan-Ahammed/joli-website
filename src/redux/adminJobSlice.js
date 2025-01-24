import { createSlice } from "@reduxjs/toolkit";

const adminJob = createSlice({
  name: "creatingJob",
  initialState: {
    createdJob: [],
    createdSingleJob: null,
  },
  reducers: {
    setAllAdminJob: (state, action) => {
      state.createdJob = action.payload;
    },
    CreatingJob: (state, action) => {
      if (!Array.isArray(state.createdJob)) {
        state.createdJob = []; // Reset to an empty array if corrupted
      }
      state.createdJob = [...state.createdJob, action.payload];
    },
  },
});
export const { CreatingJob, setAllAdminJob } = adminJob.actions;
export default adminJob.reducer;
