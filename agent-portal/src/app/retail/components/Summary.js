import React from 'react';
import { NextPrev } from './NextPrev';
import { Divider, Row, Col, Form, Checkbox, Spin, Card } from 'antd';
import './Summary.css';
import SummaryHeader from './SummaryHeader';
import { getLocalStorage } from '@utils/storageUtil';
import FileComponent from '@app/common/FileComponent/index';

export const Summary = (props) => {
  const { retailKycDetail, submitRetailSummary, schemeList, retailKycLoading, id } = props;
  const {
    basicInfo,
    addressInfo,
    identityInfos,
    familyInfos,
    nomineeInfos,
    additionalInfo,
    declarations,
    documentInfos,
    services,
    schemeInfo,
  } = retailKycDetail;

  //---------------------LOOKUPS---------------------//


  //---------------------LOOKUPS---------------------//

  const onSubmit = () => {
    const submit = true;
    submitRetailSummary({ submit, registrationNumber: id });
  };

  return (
    <>
    
    </>
  );
};
