'use strict';

class ResourceError extends Error {
    constructor(message = '请求资源错误') {
        super();
        this.code = 2000;
        this.message = message;
        this.name = 'ResourceError';
    }
}

class NotFoundError extends ResourceError {
    constructor(message = '找不到资源') {
        super(message);
        this.code = 2001;
        this.name = 'NotFoundError';
    }
}

class PermissionDeniedError extends ResourceError {
    constructor(message = '权限不足') {
        super(message);
        this.code = 2002;
        this.name = 'PermissionDeniedError';
    }
}

class LoginRequiredError extends ResourceError {
    constructor(message = '需登录后访问') {
        super(message);
        this.code = 2003;
        this.name = 'LoginRequiredError';
    }
}

class AccessDeniedError extends ResourceError {
    constructor(message = '访问拒绝') {
        super(message);
        this.code = 2004;
        this.name = 'AccessDeniedError';
    }
}

class RedirectError extends ResourceError {
    constructor(message = '重定向') {
        super(message);
        this.code = 2005;
        this.name = 'RedirectError';
    }
}

class RequestTimeoutError extends ResourceError {
    constructor(message = '请求超时') {
        super(message);
        this.code = 2006;
        this.name = 'RequestTimeoutError';
    }
}

class BanLoginError extends ResourceError {
    constructor(message = '禁止登录') {
        super(message);
        this.code = 2007;
        this.name = 'BanLoginError';
    }
}

class DataLoadingFailureError extends ResourceError {
    constructor(message = '数据加载失败') {
        super(message);
        this.code = 2008;
        this.name = 'DataLoadingFailureError';
    }
}

module.exports = {
    ResourceError,
    NotFoundError,
    PermissionDeniedError,
    LoginRequiredError,
    AccessDeniedError,
    RedirectError,
    RequestTimeoutError,
    BanLoginError,
    DataLoadingFailureError
};
