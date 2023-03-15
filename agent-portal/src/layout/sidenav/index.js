import React from 'react';

import WebSideNav from './WebSideNav';
import MobileSideNav from './MobileSideNav';
import { getLocalStorage } from '@utils/storageUtil';

const AppSideNav = () => (
  <div className="app-sidenav-container">
  
      <>
        <MobileSideNav />
        <WebSideNav />
      </>
   
  </div>
);

export default AppSideNav;
