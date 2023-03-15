import React from 'react';

import NumberCards from './NumberCards';
import ProjectTable from './ProjectTable';

const Dashboard = () => (
  <div className="container-fluid no-breadcrumb page-dashboard">
    <h4 className="article-title">Dashboard</h4>
    <div key="1">
      {' '}
      <NumberCards />{' '}
    </div>
    <div key="2">
      {' '}
      <ProjectTable />{' '}
    </div>
  </div>
);

export default Dashboard;
