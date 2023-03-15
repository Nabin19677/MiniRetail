import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@utils/history';
import retailKycSlice from '@app/retail/slice';
import retailDashboardSlice from '@app/retail-dashboard/slice';
import uiReducer from '@layout/duck/uiReducer';


const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  retailKyc: retailKycSlice.reducer,
  retailDashboard: retailDashboardSlice.reducer,
})

export default rootReducer;
