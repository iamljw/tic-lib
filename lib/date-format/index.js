'use strict';

const moment = require('../moment').zhCN;

module.exports = obj => {
    if (!obj) {
        return;
    }
    if (obj.dataValues) {
        let { dataValues } = obj;
        if (dataValues instanceof Array) {
            dataValues = dataValues.map(obj => {
                for (const field of ['createdAt', 'updatedAt']) {
                    obj[field] = moment(obj[field]).format('YYYY-MM-DD HH:mm:ss');
                }
                return obj;
            });
        } else {
            for (const field of ['createdAt', 'updatedAt']) {
                dataValues[field] = moment(dataValues[field]).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    } else if (obj instanceof Array) {
        obj = obj.map(item => {
            for (const field of ['createdAt', 'updatedAt']) {
                item[field] = moment(item[field]).format('YYYY-MM-DD HH:mm:ss');
            }
            return item;
        });
    } else {
        for (const field of ['createdAt', 'updatedAt']) {
            obj[field] = moment(obj[field]).format('YYYY-MM-DD HH:mm:ss');
        }
    }
};
