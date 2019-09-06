'use strict';

class ResourceError extends Error {
    constructor(message) {
        super();
        this.code = 2000;
        this.message = message;
        this.name = 'ResourceError';
    }
}

class NotFoundError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2001;
        this.name = 'NotFoundError';
    }
}

class PermissionDeniedError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2002;
        this.name = 'PermissionDeniedError';
    }
}

class LoginRequiredError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2003;
        this.name = 'LoginRequiredError';
    }
}

class AccessDeniedError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2004;
        this.name = 'AccessDeniedError';
    }
}

class RedirectError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2005;
        this.name = 'RedirectError';
    }
}

class RequestTimeoutError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2006;
        this.name = 'RequestTimeoutError';
    }
}

class BanLoginError extends ResourceError {
    constructor(message) {
        super(message);
        this.code = 2007;
        this.name = 'BanLoginError';
    }
}

class DataLoadingFailureError extends ResourceError {
    constructor(message) {
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
