// import { UserOutlined } from '@ant-design/icons';
// import { Avatar, Layout, Menu, MenuProps, Dropdown, Tooltip, Button } from 'antd';
// import classNames from 'classnames';
// import { observer } from 'mobx-react-lite';
import React, { FC, useCallback, useMemo, useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// // import { useRootStore } from '@src/hooks/use-root-store';
// import { routes } from '@src/routes';
// import { ReactComponent as FeedbackIcon } from './images/feedback.svg';
// import { ReactComponent as HelpIcon } from './images/help.svg';
// import logo from './images/logo.png';
// import './style.less';

// const { Content, Header } = Layout;

type Props = React.PropsWithChildren<unknown>;

// const iconMenuItemUrl: Record<string, string> = {
//   help: 'https://iwiki.woa.com/pages/viewpage.action?pageId=1642566076',
//   update: 'https://iwiki.woa.com/pages/viewpage.action?pageId=1628919625'
// };

const BasicLayout: FC<Props> = ({ children }) => {
  //   const history = useHistory();
  //   const { pathname } = useLocation();
  //   const rootStore = useRootStore();
  //   const { commonStore } = rootStore;

  //   const onMenuClick = useCallback(
  //     (info: Parameters<Required<MenuProps>['onClick']>[0]) => {
  //       const { key } = info;
  //       commonStore.changeCurrentMenu(`${key}`);
  //       history.replace({
  //         pathname: `${key}`
  //       });
  //     },
  //     [commonStore, history]
  //   );

  //   const helpDropdownMenu = useMemo(
  //     () => (
  //       <Menu
  //         onClick={(e) => {
  //           window.open(iconMenuItemUrl[e.key]);
  //         }}>
  //         <Menu.Item key="help">帮助文档</Menu.Item>
  //         <Menu.Item key="update">更新日志</Menu.Item>
  //       </Menu>
  //     ),
  //     []
  //   );
  return <div></div>;
  //   return (
  //     <Layout>
  //       <Header
  //         className="layout-header"
  //         style={{
  //           backgroundColor: '#fff',
  //           padding: '0 24px',
  //           height: 56
  //         }}>
  //         <img className="logo-wrapper" src={logo} onClick={() => history.push(routes.home.pathname)} />
  //         <PointGuidance
  //           placement="bottom"
  //           localSName="demo-guidance-local-state"
  //           guidance="欢迎点击DEMO模式进行功能体验"
  //           // eslint-disable-next-line no-mixed-operators
  //           canDisplay={localStorage.getItem('demo-guidance-local-state') !== 'true'}></PointGuidance>
  //         <Menu theme="light" mode="horizontal" className="header-menu" selectedKeys={[pathname]} onClick={onMenuClick}>
  //           {routes.workbench.pathname === pathname ? (
  //             <Menu.Item key={`${routes.workbench.pathname}`} className="header-menu-item">
  //               <span className="header-menu-item-title">{routes.workbench.title}</span>
  //             </Menu.Item>
  //           ) : (
  //             <Menu.Item key={`${routes.home.pathname}`} className="header-menu-item">
  //               <span className="header-menu-item-title">{routes.home.title}</span>
  //             </Menu.Item>
  //           )}

  //           <Menu.Item key={`${routes.digital.pathname}`} className="header-menu-item">
  //             <span className="header-menu-item-title">{routes.digital.title}</span>
  //           </Menu.Item>
  //         </Menu>
  //         <div className="layout-header-right">
  //           <div className="icon-item" onClick={() => window.open('wxwork://message?uin=8444250788321730')}>
  //             <FeedbackIcon />
  //           </div>
  //           <Dropdown overlay={helpDropdownMenu} placement="bottomRight" overlayClassName="help-dropdown">
  //             <div className="icon-item">
  //               <HelpIcon />
  //             </div>
  //           </Dropdown>
  //           <Avatar size={32} className="header-avatar" />
  //         </div>
  //       </Header>
  //       <Layout>
  //         <Content className="layout-content" id="basic-layout-content">
  //           {children}
  //         </Content>
  //       </Layout>
  //     </Layout>
  //   );
};

// export default observer(BasicLayout);
