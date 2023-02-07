# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




## 项目结构

```bash
.
├── README.md
├── public
└── src
│   ├── common
│   ├── components			# 公共组件
│   ├── constants			# 常量
│   ├── echarts.d.ts
│   ├── hooks				# 通用 hooks
│   ├── index.tsx
│   ├── pages				# 页面
│   ├── react-app-env.d.ts	# 全局定义的类型、枚举
│   ├── style				# 公共样式
│   └── utils				# 工具函数
├── .code.yml
├── .eslintignore				# eslint 忽略范围
├── .eslintrc.js				# eslint 配置文件，规范团队 ts、tsx 代码风格
├── .gitignore					# git 忽略范围
├── .prettierrc					# prettier 配置文件
├── .stylelintrc.js				# stylelint 配置文件，规范团队 less 代码风格
├── config-overrides.js			# 覆盖 create-react-app 默认配置
├── nodemon.json
├── package-lock.json			# 依赖版本信息
├── package.json				# 项目基本信息配置
├── tsconfig.json				# ts 配置入口文件
└── tsconfig.paths.json
```

## 路径映射

项目中需要在四个文件中配置路径映射

- [tsconfig.paths.json](https://www.typescriptlang.org/tsconfig#paths): `compilerOptions.paths`, *build 前*
- jest.config.js: `moduleNameMapper`, *测试时*
- config-overrides.js: `addWebpackAlias`, *build 后*
- .eslintrc.js: `settings['import/internal-regex']`, *lint 时*