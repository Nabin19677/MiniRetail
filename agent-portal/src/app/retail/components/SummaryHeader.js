import React from 'react'
import { Col, Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import './Summary.css';
import banklogo from "../../../assets/images/globalime-logo.jpeg";


const SummaryHeader = () => {
  return (
    <>
    <div className={"sum-header"}>
          <Row gutter={32}>
            <Col span={16}>
              <span className={"sum-logo"}>
                <img src={banklogo} />
              </span>
              <p style={{ fontSize: "24px" }}>RETAIL ACCOUNT OPENING KYC FORM</p>
            </Col>
            <Col>
              {/* <FileComponent dataSource={banklogo} height='300px' width='200px' /> */}
            </Col>
          </Row>
        </div>
      </>  
      )
}

export default SummaryHeader;