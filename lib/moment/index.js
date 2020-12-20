'use strict';

const local = require('moment');
const zhCN = require('moment-timezone');
zhCN.locale('zh_CN');
zhCN.tz.setDefault('Asia/Shanghai');

module.exports = {
    local,
    zhCN
};
