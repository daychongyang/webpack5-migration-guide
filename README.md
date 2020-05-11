# Webpack5 迁移指南

To v5 from v4

# 准备工作

- Node.js(**>=10.13.0**), _使用更新的 Node.js 版本可提高构建性能._
- 更新 webpack 及其依赖.

  ```sh
    # webpack
    yarn add webpack@beta -D

    # webpack-cli
    yarn add webpack-cli@beta -D

    # webpack-merge
    yarn add webpack-merge @types/merge -D

    # webpack-dev-server
    yarn add webpack-dev-server @types/webpack-dev-server -D
  ```
