import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import classnames from 'classnames';

import { toggleCollapsedNav, toggleOffCanvasNav } from '../duck/actions';
import AppMenu from './AppMenu';
import Logo from '@app/shared/Logo/index';

const { Sider } = Layout;

const MobileSider = (props) => {
  const { colorOption, sidenavWidth } = props;

  const sidenavContentRef = useRef('sidenavContent');

  return (
    <Sider
      trigger={null}
      width={sidenavWidth}
      id="app-sidenav"
      className={classnames('app-sidenav', {
        'sidenav-bg-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
        'sidenav-bg-dark': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) < 0,
      })}
    >
      <div className="sidenav-content" ref={sidenavContentRef}>
        <AppMenu />
      </div>
    </Sider>
  );
};

const mapStateToProps = (state) => ({
  collapsedNav: state.ui.collapsedNav,
  offCanvasNav: state.ui.offCanvasNav,
  sidenavWidth: state.ui.sidenavWidth,
  colorOption: state.ui.colorOption,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleCollapsedNav: (isCollapsedNav) => {
      dispatch(toggleCollapsedNav(isCollapsedNav));
    },
    handleToggleOffCanvasNav: (isOffCanvasNav) => {
      dispatch(toggleOffCanvasNav(isOffCanvasNav));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileSider);
