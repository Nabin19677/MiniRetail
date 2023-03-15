import React from 'react';
import { Row, Col, Table, Form, Input, Button, Card, Layout, Select, Space, Tooltip } from 'antd';
import moment from "moment"
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { setLocalStorage } from '@utils/storageUtil';

export function Approved(props) {
  const {
    retailDashboardLoading,
    retailList,
    redirect,
  } = props;
 
  console.log(retailList)

  const columns = [
    {
      title: "S.N",
      key: 'S.N.',
      align: 'center',
      isVisible: true,
      width: '2ch',
      render: (text, record, index) => {
        return index + 1 
      },
    },
    {
      title: "Name",
      dataIndex: 'full_name',
      key: 'full_name',
      width: '6ch',
      align: 'center',
     
    }, 
    {
      title: "Id",
      dataIndex: 'id',
      key: 'id',
      width: '2ch',
      align: 'center',
    },
    {
      title: "CIF",
      dataIndex: 'CIF',
      key: 'CIF',
      width: '2ch',
      align: 'center',
    },
    {
      title: "Date of Birth",
      dataIndex: 'dob',
      key: 'dob',
      align: 'center',
      width: '4ch',
      render: (text, record) => {
        return <div>{record.dob}</div>;
      },
    },

    {
      title: "Gender",
      dataIndex: 'gender',
      key: 'gender',
      align: 'center',
      width: '5ch',
    },

    {
      title: 'Mobile',
      dataIndex: 'mobile_number',
      key: 'mobile_number',
      align: 'center',
      width: '4ch',
    
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      width: '8ch',
      render: (text, record) => {
        return <div>{record.email}</div>;
      },
    },
    {
      title: "Created On",
      dataIndex: 'createdAt',
     
      key: 'createdAt',
      align: 'center',
      width: '4ch',
      render: (text, record) => {
        return <div>{moment(record.createdAt).format("YYYY-MM-DD")}</div>;
      },
    },
 
   
  ];
  return (
    <Layout className="site-layout">
      <div className="site-layout-background" style={{ padding: 0, minHeight: 360 }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24} sm={24} md={24} lg={24} xl={24}>
            <Row>
              <Col span={24} className="tableContainer">
                <div className="formTitle kycDashboard">
                  <Table
                    rowKey={(record) => record.id}
                    columns={columns?.filter((d) => d?.isVisible !== false)}
                    dataSource={retailList}
                    loading={retailDashboardLoading}
                    scroll={{ x: 1600 }}
                  
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
