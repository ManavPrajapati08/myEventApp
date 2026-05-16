import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from '../../shared/services/httpService';
import { User } from '../../types';

interface LoginData {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const response: any = await httpService.post('/login', {
        email: data.email,
        password: data.password,
      });

      const transformedUser: User = {
        id: response.data.user.usr_id,
        name: response.data.user.usr_fname,
        email: response.data.user.usr_email,
      };

      return {
        user: transformedUser,
        token: response.data.token,
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
