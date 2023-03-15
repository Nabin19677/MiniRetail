import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {notification} from "antd"
// Import custom components
import * as retailKycSlice from '@app/retail/slice';
import KYC from '@app/retail/components/KYC';

export const RetailKycContainer = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = (url, others = {}) => {
    history.push({
      pathname: url,
      state: {
        tabState: others?.tabState,
      },
    });
  }

  const retailKyc = useSelector((state) => state.retailKyc);
  const retailKycPayload = retailKyc.payload;
  const retailKycLoading = retailKyc.loading;
  const retailKycErrors = retailKyc.errors;

  /**
   * Add retailKyc
   * @param {object} formData
   *
   */
  const addKycDetails = (formData) => {
    dispatch(
      retailKycSlice.addKycDetails(formData)
    ).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        redirect("/retail/retail-dashboard", {tabState : "WAITING_FOR_APPROVAL"})
        notification.success({
          message: "Customer is waiting for verification.",
        });
      }
    });
  };

  /**
   * Clean user records.
   *
   */
  const cleanRetailKyc = () => {
    dispatch(retailKycSlice.cleanRetailKyc());
  };


  useEffect(() => {
    return () => {
      cleanRetailKyc();
    };
  }, []);


  props = {
    ...props,
    redirect,
    retailKycPayload,
    retailKycLoading,
    retailKycErrors,
    addKycDetails,
    cleanRetailKyc
  };

  return (
    <KYC {...props}
    />
  );
};
export default RetailKycContainer;
