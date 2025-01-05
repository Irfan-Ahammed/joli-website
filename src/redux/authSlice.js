import { USER_API_END_POINT } from '@/utils/constant';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for logout
export const logOut = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const res = await axios.post(`${USER_API_END_POINT}/logout`);
    dispatch(setUser(null)); // Clear user data on logout
    dispatch(setLoading(false)); // Set loading to false
    return res.data;
  } catch (err) {
    console.log('Logout failed:', err); // Log the error
    dispatch(setLoading(false)); // Ensure loading is reset
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
