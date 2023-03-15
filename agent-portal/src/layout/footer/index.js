import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = () => (
  <Footer className="app-footer app-footer-custom" style={{ marginTop: 'auto' }}>
    <div className="footer-inner-v1">
      <span className="small">
      Made with{" "}
          <span aria-label="heart" role="img">
            &#128153;
          </span>{" "}
          by <text as="kbd"> Anil Khadka</text>
      </span>
    </div >
  
  </Footer>
);

export default AppFooter;
