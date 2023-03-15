import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { fetch, store, update } from '@utils/httpUtil';
import { setLocalStorage } from '@utils/storageUtil';

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};


//list 
export const fetchDashboardList = createAsyncThunk(
  'retailDashboard/list',
  (formData = {}, { rejectWithValue }) => {
    return store('retail/customer/list', formData)
      .then((response) => {
        if (response.data.msg === 'SUCCESS') {
          return response.data.data;
        } else {
          // TODO
        }
      })
      .catch((error) => rejectWithValue(error.response.data));
  }
);

//approve 
export const approveAndGenerateCIF = createAsyncThunk(
  'retailDashboard/approve',
  (formData = {}, { rejectWithValue }) => {
    return update('retail/customer/approve', formData)
      .then((response) => {
        if (response.data.msg === 'SUCCESS') {
          return response.data.data;
        } else {
          // TODO
        }
      })
      .catch((error) => rejectWithValue(error.response.data));
  }
);


//reject
export const rejectCustomer = createAsyncThunk(
  'retailDashboard/reject',
  (formData = {}, { rejectWithValue }) => {
    return update('retail/customer/reject', formData)
      .then((response) => {
        if (response.data.msg === 'SUCCESS') {
          return response.data.data;
        } else {
          // TODO
        }
      })
      .catch((error) => rejectWithValue(error.response.data));
  }
);

//retail dashboard
export const retailDashboardSlice = createSlice({
    name: 'retailDashboard',
    initialState: INITIAL_STATE,
    reducers: {
      cleanRetailDashboard(state) {
        state.loading = false;
        state.payload = [];
        state.errors = {};
      },
    },
    extraReducers: {
      [fetchDashboardList.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchDashboardList.fulfilled]: (state, action) => {
        state.loading = false;
        state.payload = action.payload;
        state.errors = {};
      },
      [fetchDashboardList.rejected]: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      },
      [approveAndGenerateCIF.pending]: (state, action) => {
        state.loading = true;
      },
      [approveAndGenerateCIF.fulfilled]: (state, action) => {
        state.loading = false;
        state.errors = {};
      },
      [approveAndGenerateCIF.rejected]: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      },
      [rejectCustomer.pending]: (state, action) => {
        state.loading = true;
      },
      [rejectCustomer.fulfilled]: (state, action) => {
        state.loading = false;
        state.errors = {};
      },
      [rejectCustomer.rejected]: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      },
    },
  });

export const { cleanRetailDashboard } = retailDashboardSlice.actions;

export default  retailDashboardSlice ;