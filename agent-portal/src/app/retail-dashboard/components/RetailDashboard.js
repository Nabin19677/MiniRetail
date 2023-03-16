import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Row, Col, Layout, PageHeader, Tabs , Form } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { WaitingForApproval } from './WaitingForApproval/waitingForApproval';
import { Rejected } from './Rejected/rejected';
import { Approved } from './Approved/approved';
import { DetailModal } from './Modals/DetailModal';
import { fetchCustomerDetailById } from '../services';

const { TabPane } = Tabs;
const RetailDashboard = (props) => {
  const {
    retailList,
    retailDashboardErrors,
    retailDashboardLoading,
    fetchDashboardList,
    cleanRetailDashboard,
  } = props;

  const [form] = Form.useForm();
  const history = useHistory();
  const stateFromLink = history?.location?.state;
  const tabKeyValue = stateFromLink?.tabState || 'WAITING_FOR_APPROVAL';
  const [currentTabKey, setCurrentTabKey] = useState(tabKeyValue);
  const [detail, setDetail] = useState();
  const [detailLoading, setDetailLoading] = useState();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    fetchDashboardList({
      status : tabKeyValue
    });
    return () => {
      cleanRetailDashboard();
      setDetail(undefined)
    };
  }, []);

  const fetchCustomeDetail = (id) => {
    setIsDetailModalOpen(true);
    setDetailLoading(true)
    fetchCustomerDetailById(id).then(res => {
      setDetail(res.data.data)
      setDetailLoading(false)
    }).catch(err => {
      setDetailLoading(false)
    })
  }


  const handleTabChange = (e) => {
    cleanRetailDashboard();
    setDetail(undefined)
    setCurrentTabKey(e);
    fetchDashboardList({
      status : e
    });
    form.resetFields();
  };

  const redirect = (url, searchQuery = '') => {
    history.push({
      pathname: url,
      state: {
        tabState: currentTabKey,
      },
      search: searchQuery,
    });
  };

  const detailModalProps = {
    ...props,
    detail,
    detailLoading,
    isDetailModalOpen,
    handleCancel () {
      setIsDetailModalOpen(false)
      setDetail(undefined)
    }
  }

  const tabProps = {
    ...props,
    detailLoading,
    fetchCustomeDetail,
    setIsDetailModalOpen,
    retailList,
    redirect,
  };

  const retailAccountTabs = [
    {
      key: 'WAITING_FOR_APPROVAL',
      tab: 'Waiting For Approval',
      component: <WaitingForApproval {...tabProps} />,
    },
    { key: 'APPROVED', tab: 'Approved', component: <Approved {...tabProps} /> },
    { key: 'REJECTED', tab: 'Rejected', component: <Rejected {...tabProps} /> },
  ];
  
  return (
    <Layout className="site-layout">
      <Content style={{ margin: '0 16px' }}>
        <PageHeader className="site-page-header" title="Retail Dashboard" subTitle=" " />
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24} sm={24} md={24} lg={24} xl={24}>
              
                <Tabs
                  defaultActiveKey={currentTabKey}
                  tabPosition="top"
                  animated={true}
                  onChange={handleTabChange}
                  destroyInactiveTabPane
                  type="card"
                >
                  {retailAccountTabs?.map((retailAccountTabs, index) => (
                    <TabPane key={retailAccountTabs?.key} tab={retailAccountTabs?.tab}>                    
                      {retailAccountTabs?.component}
                    </TabPane>
                  ))}
                </Tabs>
             
            </Col>
          </Row>
        </div>
      </Content>
      {
        isDetailModalOpen && <DetailModal {...detailModalProps}/>
      }
    </Layout>
  );
};
export default withRouter(RetailDashboard);
