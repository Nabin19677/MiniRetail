import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@constants/index';
import { store, } from '@utils/httpUtil';

export const addKycDetails = createAsyncThunk(
  'retailKyc/add',
  (data = {}, { rejectWithValue, dispatch }) => {
    console.log(data)
    const formData = new FormData();
    try{
   
      Object.keys(data).forEach((formControlName) => {
        if (["citizenship_front","citizenship_back", "other_document"].includes(formControlName)) {
            formData.append(formControlName, data[formControlName],  data[formControlName].name);
        } else
            formData.append(
                formControlName,
                data[formControlName]
            );
    });
    } catch (e) {
      console.log(e)
    }

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
