import React from 'react';
import {
  Row,
  Col,
  Table,
  Form,
  Input,
  Button,
  Card,
  Layout,
  Select,
  Space,
  Tooltip,
  Modal,
} from 'antd';
import moment from 'moment';
import { StopOutlined, CheckOutlined, FileSearchOutlined } from '@ant-design/icons';

export function WaitingForApproval(props) {
  const {
    retailDashboardLoading,
    retailList,
    approveAndGenerateCIF,
    rejectCustomer,
    redirect,
    fetchCustomeDetail,
    setIsDetailModalOpen,
  } = props;

  const columns = [
    {
      title: 'S.N',
      key: 'S.N.',
      align: 'center',
      isVisible: true,
      width: '2ch',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'full_name',
      width: '6ch',
      align: 'center',
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: '2ch',
      align: 'center',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob',
      align: 'center',
      width: '4ch',
      render: (text, record) => {
        return <div>{record.dob}</div>;
      },
    },

    {
      title: 'Gender',
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
      title: 'Created On',
      dataIndex: 'createdAt',

      key: 'createdAt',
      align: 'center',
      width: '4ch',
      render: (text, record) => {
        return <div>{moment(record.createdAt).format('YYYY-MM-DD')}</div>;
      },
    },

    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      fixed: 'right',
      align: 'center',
      width: '4ch',
      render: (index, record) => (
        <>
          <Space wrap size={6}>
            <Tooltip placement="top" title="View Detail">
              <Button
                type="default"
                shape="circle"
                icon={<FileSearchOutlined />}
                style={{ color: 'rgba(29, 68, 134, 1)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  fetchCustomeDetail(record.id)
                  
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="Approve">
              <Button
                type="default"
                shape="circle"
                icon={<CheckOutlined />}
                style={{ color: 'rgba(29, 68, 134, 1)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  Modal.confirm({
                    title: 'Are you sure?',
                    content: 'This will approve and generate CIF number for the selected customer.',
                    width: 500,
                    cancelText: 'No',
                    okText: 'Yes',
                    onOk() {
                      approveAndGenerateCIF({ id: record.id });
                    },
                  });
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="Reject">
              <Button
                type="default"
                shape="circle"
                icon={<StopOutlined />}
                style={{ color: 'rgb(255, 99, 71)' }}
                onClick={(e) => {
                  Modal.confirm({
                    title: 'Are you sure?',
                    content: 'This will reject customer from further process.',
                    width: 500,
                    cancelText: 'No',
                    okText: 'Yes',
                    onOk() {
                      rejectCustomer({ id: record.id });
                    },
                  });
                }}
              />
            </Tooltip>
          </Space>
        </>
      ),
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
