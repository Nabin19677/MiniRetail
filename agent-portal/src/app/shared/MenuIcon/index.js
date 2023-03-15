import React from 'react';

import {
  DashboardOutlined,
  ShopOutlined,
  ApartmentOutlined,
  WarningOutlined,
  LockOutlined,
  PlusCircleOutlined,
  BarsOutlined,
  AuditOutlined,
  SearchOutlined,
  SettingOutlined,
  EyeOutlined,
  UserAddOutlined,
  UserOutlined,
  BranchesOutlined,
  RiseOutlined,
  CheckCircleFilled,
  PlusCircleTwoTone,
  CheckOutlined,
  NotificationOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  SelectOutlined,
} from '@ant-design/icons';

const index = ({ type }) => {
  switch (type) {
    case 'PlusCircleOutlined':
      return <PlusCircleOutlined />;
    case 'SearchOutlined':
      return <SearchOutlined />;
    case 'BarsOutlined':
      return <BarsOutlined />;
    case 'AuditOutlined':
      return <AuditOutlined />;
    case 'DashboardOutlined':
      return <DashboardOutlined />;
    case 'LockOutlined':
      return <LockOutlined />;
    case 'SettingOutlined':
      return <SettingOutlined />;
    case 'EyeOutlined':
      return <EyeOutlined />;
    case 'UserAddOutlined':
      return <UserAddOutlined />;
    case 'UserOutlined':
      return <UserOutlined />;
    case 'BranchesOutlined':
      return <BranchesOutlined />;
    case 'ShopOutlined':
      return <ShopOutlined />;
    case 'ApartmentOutlined':
      return <ApartmentOutlined />;
    case 'NotificationOutlined':
      return <NotificationOutlined />;
    case 'BankOutlined':
      return <BankOutlined />;
    case 'UsergroupAddOutlined':
      return <UsergroupAddOutlined />;
    case 'SelectOutlined':
      return <SelectOutlined />;
    case 'CheckOutlined':
      return <CheckOutlined />;
    case 'CheckCircleFilled':
      return <CheckCircleFilled />;
    case 'PlusCircleTwoTone':
      return <PlusCircleTwoTone />;
    case 'RiseOutlined':
      return <RiseOutlined />;
    default:
      return <WarningOutlined />;
  }
};

export default index;
