'use strict';

class ClientError extends Error {
    constructor(message = '客户端错误') {
        super();
        this.code = 1000;
        this.message = message;
        this.name = 'ClientError';
    }
}

class ParameterError extends ClientError {
    constructor(message = '参数错误') {
        super(message);
        this.code = 1001;
        this.name = 'ParameterError';
    }
}

class UserNotFoundError extends ClientError {
    constructor(message = '用户不存在') {
        super(message);
        this.code = 1002;
        this.name = 'UserNotFoundError';
    }
}

class InvalidPasswordError extends ClientError {
    constructor(message = '密码校验不通过') {
        super(message);
        this.code = 1003;
        this.name = 'InvalidPasswordError';
    }
}

class LogonExpirationError extends ClientError {
    constructor(message = '登录过期') {
        super(message);
        this.code = 1004;
        this.name = 'LogonExpirationError';
    }
}

class InsufficientBalanceError extends ClientError {
    constructor(message = '余额不足') {
        super(message);
        this.code = 1005;
        this.name = 'InsufficientBalanceError';
    }
}

class InvalidRequestError extends ClientError {
    constructor(message = '无效的请求') {
        super(message);
        this.code = 1006;
        this.name = 'InvalidRequestError';
    }
}

module.exports = {
    ClientError,
    ParameterError,
    UserNotFoundError,
    InvalidPasswordError,
    LogonExpirationError,
    InsufficientBalanceError,
    InvalidRequestError
};
