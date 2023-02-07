// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/lib/locale/zh_CN';
import ReactDOM from 'react-dom/client';
import React, { FC, useEffect } from 'react';
import './index.css';
import App from './App';
// import { routes } from '@src/routes';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const App: FC = () => (
//   <Router>
//     <Switch>
//       {/* <Route path="/" exact render={() => <Redirect to={routes.workbench.pathname} />}></Route> */}
//       <Route path="/" exact render={() => <Redirect to={routes.home.pathname} />}></Route>
//       <LayoutRoute path={routes.home.pathname} exact>
//         <Home />
//       </LayoutRoute>
//       <LayoutRoute path={routes.workbench.pathname} exact>
//         <Workbench />
//       </LayoutRoute>
//       <Route render={() => <Redirect to={routes.home.pathname} />} />
//     </Switch>
//   </Router>
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfigProvider locale={zhCN}>
//       {/* <RootStoreContext.Provider value={rootStore}> */}
//       <App />
//       {/* </RootStoreContext.Provider> */}
//     </ConfigProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
