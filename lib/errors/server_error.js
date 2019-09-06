'use strict';

class ServerError extends Error {
    constructor(message = '服务器错误') {
        super();
        this.code = 3000;
        this.message = message;
        this.name = 'ServerError';
    }
}

class InternalError extends ServerError {
    constructor(message = '内部错误') {
        super(message);
        this.code = 3001;
        this.name = 'InternalError';
    }
}

class ThirdPartyServicesError extends ServerError {
    constructor(message = '第三方服务异常') {
        super(message);
        this.code = 3002;
        this.name = 'ThirdPartyServicesError';
    }
}

class InternalServicesError extends ServerError {
    constructor(message = '内部服务异常') {
        super(message);
        this.code = 3003;
        this.name = 'InternalServicesError';
    }
}

class ServerMaintenanceError extends ServerError {
    constructor(message = '服务器更新、维护') {
        super(message);
        this.code = 3004;
        this.name = 'ServerMaintenanceError';
    }
}

module.exports = {
    ServerError,
    InternalError,
    ThirdPartyServicesError,
    InternalServicesError,
    ServerMaintenanceError
};
