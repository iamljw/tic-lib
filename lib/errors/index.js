'use strict';

const clientError = require('./client_error');
const serverError = require('./server_error');
const resourceError = require('./resource_error');

module.exports = {
    clientError,
    serverError,
    resourceError
};
