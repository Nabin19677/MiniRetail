/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    name: 'Dashboard',
    menuName: 'Dashboard',
    path: '/',
    iconName: 'DashboardOutlined',
  },
  {
    name: 'Retail',
    path: '/retail',
    iconName: 'UserOutlined',
    routes: [
      {
        iconName: 'UserAddOutlined',
        path: '/retail/KYC',
        name: 'Quick KYC',
      },
      {
        key: 'dashboard',
        iconName: 'DashboardOutlined',
        path: '/retail/retail-dashboard',
        name: 'Retail Dashboard',
      },
    ],
  },

]