import React, { useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Layout, Dropdown, Divider, Avatar } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import Logo from '@app/shared/Logo/index';
import { toggleCollapsedNav, toggleOffCanvasMobileNav } from '@layout/duck/actions';
import { getLocalStorage } from '@utils/storageUtil';

const { Header } = Layout;

const AppHeader = (props) => {
  const { collapsedNav, offCanvasMobileNav, colorOption, showLogo } = props;

  const onToggleCollapsedNav = () => {
    const { handleToggleCollapsedNav, collapsedNav } = props;
    handleToggleCollapsedNav(!collapsedNav);
  };

  const onToggleOffCanvasMobileNav = () => {
    const { handleToggleOffCanvasMobileNav, offCanvasMobileNav } = props;
    handleToggleOffCanvasMobileNav(!offCanvasMobileNav);
  };

  const avatarDropdown = (
   <></>
  );

  return (
    <Header className="app-header">
      <div
        className={classnames('app-header-inner', {
          'bg-white': ['11', '12', '13', '14', '15', '16', '21'].indexOf(colorOption) >= 0,
          'bg-dark': colorOption === '31',
          'bg-primary': ['22', '32'].indexOf(colorOption) >= 0,
          'bg-success': ['23', '33'].indexOf(colorOption) >= 0,
          'bg-gibl': ['24', '34'].indexOf(colorOption) >= 0,
          'bg-info': ['24', '34'].indexOf(colorOption) >= 0,
          'bg-warning': ['25', '35'].indexOf(colorOption) >= 0,
          'bg-danger': ['26', '36'].indexOf(colorOption) >= 0,
        })}
      >
        <div className="header-left">
        
            <div className="list-unstyled list-inline">
              {showLogo && [<Logo key="logo" />, <Divider type="vertical" key="line" />]}
              <a
                href="javascript:void(0);"
                className="list-inline-item d-none d-md-inline-block"
                onClick={onToggleCollapsedNav}
              >
                {collapsedNav ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a>
              <a
                href="javascript:void(0);"
                className="list-inline-item d-md-none"
                onClick={onToggleOffCanvasMobileNav}
              >
                {offCanvasMobileNav ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a>
            </div>
        
        </div>
        <div className="header-right">
          <div className="list-unstyled list-inline">
            <Dropdown
              className="list-inline-item"
              overlay={avatarDropdown}
              trigger={['click']}
              placement="bottomRight"
            >
              <a className="ant-dropdown-link no-link-style" href="javascript:void(0);">
                <Avatar src={process.env.PUBLIC_URL + '/assets/avatars/6.png'} size="small" />
                <span className="avatar-text d-none d-md-inline">
                 
                </span>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = (state) => ({
  offCanvasMobileNav: state.ui.offCanvasMobileNav,
  collapsedNav: state.ui.collapsedNav,
  colorOption: state.ui.colorOption,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleCollapsedNav: (isCollapsedNav) => {
    dispatch(toggleCollapsedNav(isCollapsedNav));
  },
  handleToggleOffCanvasMobileNav: (isOffCanvasMobileNav) => {
    dispatch(toggleOffCanvasMobileNav(isOffCanvasMobileNav));
  },
  actions: bindActionCreators(Object.assign({}), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
