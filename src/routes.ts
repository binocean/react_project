export type RouteType = {
  pathname: string;
  title: string;
  code: string; // 功能模块业务码，例如模型：model；权限：authority;与后台配置码保持一致
};

// https://kentcdodds.com/blog/how-to-write-a-constrained-identity-function-in-typescript
const createRoutes = <ObjectType extends Record<string, RouteType>>(obj: ObjectType) => obj;

export const routes = createRoutes({
  home: {
    pathname: '/home',
    title: '工作台',
    code: 'home'
  },
  workbench: {
    pathname: '/workbench',
    title: '工作台',
    code: 'workbench'
  }
});
