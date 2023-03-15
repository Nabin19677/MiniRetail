import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import RetailDashboard from '../components/RetailDashboard';
import * as retailDashboardSlice from '../slice';
import {notification} from "antd"

export const RetailDashboardContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const retailDashboardState = useSelector((state) => state.retailDashboard);
  const retailList = retailDashboardState.payload;
  const retailDashboardErrors = retailDashboardState.errors;
  const retailDashboardLoading = retailDashboardState.loading;

  const redirect = (url,tabState ) => {
    history.push({
      pathname: url,
      state: {
        tabState,
      },
    });
  };
  

  /**
   * Fetch retail kyc details with criteria.
   * @param {object} formData
   *
   */
  const fetchDashboardList = (formData) => {
    dispatch(retailDashboardSlice.fetchDashboardList(formData));
  };

  /**
   * Approve Customer and Generate CIF Number
   * @param {object} formData
   *
   */
  const approveAndGenerateCIF = (formData) => {
    dispatch(retailDashboardSlice.approveAndGenerateCIF(formData)).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        redirect("/")
        redirect("/retail/retail-dashboard",  "APPROVED")
        notification.success({
          message: "Approved and CIF Number Generated",
        });
      }
    });;
  };

  /**
   * Reject Customer With Id
   * @param {object} formData
   *
   */
  const rejectCustomer = (formData) => {
    dispatch(retailDashboardSlice.rejectCustomer(formData)).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        redirect("/")
        redirect("/retail/retail-dashboard",  "REJECTED")
        notification.error({
          message: "Customer Rejected",
        });
      }
    });;
  };

  /**
   * Clean user records.
   *
   */
  const cleanRetailDashboard = () => {
    dispatch(retailDashboardSlice.cleanRetailDashboard());
  };

  props = {
    ...props,
    retailList,
    retailDashboardErrors,
    retailDashboardLoading,
    fetchDashboardList,
    cleanRetailDashboard,
    approveAndGenerateCIF,
    rejectCustomer
  };

  return <RetailDashboard {...props} />;
};

export default RetailDashboardContainer;
