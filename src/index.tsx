import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import ReactDOM from 'react-dom/client';
import React, { FC, useEffect } from 'react';
import Home from './pages/home';
import Workbench from './pages/workbench';
// import App from './App';
// import Workbench from './pages/workbench';
// import { routes } from '@src/routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/workbench" element={<Workbench />} />
      {/* <Route path="/workbench" element={<Workbench />} /> */}
    </Routes>
  </Router>
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      {/* <RootStoreContext.Provider value={rootStore}> */}
      <App />
      {/* </RootStoreContext.Provider> */}
    </ConfigProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
