import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Row, Col, Layout, PageHeader, Tabs , Form } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { WaitingForApproval } from './WaitingForApproval/waitingForApproval';
import { Rejected } from './Rejected/rejected';
import { Approved } from './Approved/approved';

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

  useEffect(() => {
    fetchDashboardList({
      status : tabKeyValue
    });
    return () => {
      cleanRetailDashboard();
    };
  }, []);


  const handleTabChange = (e) => {
    cleanRetailDashboard();
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

  const tabProps = {
    ...props,
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
    </Layout>
  );
};
export default withRouter(RetailDashboard);
