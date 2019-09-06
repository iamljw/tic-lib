# 泰链 NodeJS 开发者库
该库内容会不实时更新
## 安装
```bash
$ npm i tic-lib
或者
$ yarn add tic-lib
```
## 如何使用
示例
```js
const moment = require('tic-lib').zhCN;
console.log(moment().fromNow());
// 几秒前
```
## base-context-class
提供以下继承类供 egg 框架使用
- BaseController
    - pageSize(page, size)：分页工具
- BaseService
    - bigAdd(a,b)：加
    - bigMinus(a,b)：减
    - bigMul(a,b)：乘
    - bigDiv(a,b)：除
    - mod(a,b)：取余数
    - gt(a,b)：a是否大于b
    - gte(a,b)：a是否大于等于b
    - equals(a,b)：a是否等于b
    - bigPow(m,n)：m的n次方

```js
const { BaseController } = require('tic-lib').context;

class DemoController extends BaseController {
    async show() {
        const { bigAdd } = this;
        const res = bigAdd('10000000000000', '3233333333333333333333');
        // ...
    }
}
```
## date-format
主要用于配合 Sequelize 做查询操作，自动格式化时间字段(YYYY-MM-DD HH:mm:ss)
```js
// 返回值为一个钩子函数
const { dateFormat } = require('tic-lib');

config.sequelize = {
    // ...
    define: {
        // ...
        hooks: {
            afterFind: dateFormat
        }
    }
    // ...
}
```
## errors
根据[《NodeJS 开发手册》](https://github.com/iamljw/NodeJS-Development-Manual)规约实现的错误类
```js
const { InsufficientBalanceError } = require('tic-lib').clientError;

if (gt(amount, balance)) {
    throw new InsufficientBalanceError();
}
```
*所有错误类都有默认值，具体参考以下内容*  
已提供以下错误类引用：
### 1xxx 客户端错误
- 1000: `ClientError` 客户端错误
- 1001: `ParameterError` 参数错误
- 1002: `UserNotFoundError` 用户不存在
- 1003: `InvalidPasswordError` 密码校验不通过
- 1004: `LogonExpirationError` 登录过期
- 1005: `InsufficientBalanceError` 余额不足
- 1006: `InvalidRequestError` 无效的请求
### 2xxx 请求资源错误
- 2000: `ResourceError` 请求资源错误
- 2001: `NotFoundError` 找不到资源
- 2002: `PermissionDeniedError` 权限不足
- 2003: `LoginRequiredError` 需登录后访问
- 2004: `AccessDeniedError` 访问拒绝
- 2005: `RedirectError` 重定向
- 2006: `RequestTimeoutError` 请求超时
- 2007: `BanLoginError` 禁止登录
- 2008: `DataLoadingFailureError` 数据加载失败
### 3xxx 服务器错误
- 3000: `ServerError` 服务器错误
- 3001: `InternalError` 内部错误
- 3002: `ThirdPartyServicesError` 第三方服务异常
- 3003: `InternalServicesError` 内部服务异常
- 3004: `ServerMaintenanceError` 服务器更新、维护
## moment
提供不同时区的 moment 实例，目前已支持：

- 中国时区：zhCN
- 默认（本地）时区：local
```js
// 中国时区
const moment = require('tic-lib').zhCN;
```
```js
// 本地时区
const moment = require('tic-lib').local;
```
## sleep
线程等待（异步方式，不会造成线程阻塞）
```js
const { sleep } = require('tic-lib');

async show() {
    // 停滞3秒
    await sleep(3000);
    // ...
}
```