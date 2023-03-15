import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@constants/index';
import { store, } from '@utils/httpUtil';

export const addKycDetails = createAsyncThunk(
  'retailKyc/add',
  (data = {}, { rejectWithValue, dispatch }) => {
    
    const formData = new FormData();
    Object.keys(data).forEach((formControlName) => {
      if (formControlName === 'citizenship') {
          formData.append('citizenship', data.citizenship, data.citizenship.name);
      } else
          formData.append(
              formControlName,
              data[formControlName]
          );
  });
    return axios.post(`${API_URL}/retail/on-board-customer`, formData, { headers: {
      "Content-Type": "multipart/form-data",
    },})
      .then((response) => {
        if (response.data.msg === 'Customer Created') {
          return response?.data?.data;
        } else {
          // TODO
        }
      })
      .catch((error) => rejectWithValue(error?.response?.data || error));
  }
);

export const retailKycSlice = createSlice({
  name: 'retailKyc',
  initialState: {
    payload: {},
    loading: false,
    errors: {},
  },
  reducers: {
    cleanRetailKyc(state) {
      state.payload = {};
      state.loading = false;
      state.errors = {}
    },
  },
  extraReducers: {
    [addKycDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [addKycDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.payload =  action.payload;
      state.errors = {}
    },
    [addKycDetails.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
  
  },
});

export const { cleanRetailKyc, next, prev } = retailKycSlice.actions;
export default retailKycSlice;
