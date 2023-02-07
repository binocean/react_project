import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
// import BasicLayout from './components/basic-layout';

type Props = RouteProps & {
  layout?: 'hasHeader' | 'noHeader';
};

// const LayoutRoute: FC<Props> = ({ children, layout, ...routeProps }) => (
//   <Route {...routeProps} render={() => (!layout || layout === 'hasHeader' ? <BasicLayout>{children}</BasicLayout> : children)}></Route>
// );

const LayoutRoute: FC<Props> = () => <div>123</div>;

export default LayoutRoute;
