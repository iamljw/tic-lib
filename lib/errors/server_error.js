'use strict';

class ServerError extends Error {
    constructor(message) {
        super();
        this.code = 3000;
        this.message = message;
        this.name = 'ServerError';
    }
}

class InternalError extends ServerError {
    constructor(message) {
        super(message);
        this.code = 3001;
        this.name = 'InternalError';
    }
}

class ThirdPartyServicesError extends ServerError {
    constructor(message) {
        super(message);
        this.code = 3002;
        this.name = 'ThirdPartyServicesError';
    }
}

class InternalServicesError extends ServerError {
    constructor(message) {
        super(message);
        this.code = 3003;
        this.name = 'InternalServicesError';
    }
}

class ServerMaintenanceError extends ServerError {
    constructor(message) {
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
