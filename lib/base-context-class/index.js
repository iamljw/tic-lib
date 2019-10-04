'use strict';

const { Controller, Service } = require('egg');
const BigNumber = require('bignumber.js');
const { InternalServicesError } = require('../errors').serverError;

class BaseController extends Controller {
    /**
     * 分页处理器
     * @return {*} ss
     * @param {*} page page
     * @param {*} size size
    */
    pageSize(page, size) {
        page = parseInt(page);
        size = parseInt(size);
        page = page ? (page < 0 ? undefined : page) : undefined;
        size = size ? (size < 0 ? undefined : size) : undefined;
        return { page, size };
    }
}

class BaseService extends Service {
    /**
     * 取余操作
     * @param {string} a a
     * @param {string} b b
     */
    mod(a, b) {
        a = new BigNumber(a);
        b = new BigNumber(b);
        const res = a.mod(b);
        return res.toString(10);
    }
    equals(a, b) {
        a = new BigNumber(a);
        b = new BigNumber(b);
        const flag = a.minus(b).toNumber() === 0;
        return flag;
    }
    /**
       * 比较大小 a > b 返回true
       * @return {boolean} a是否大于b
       * @param {*} a a
       * @param {*} b b
       */
    gt(a, b) {
        a = new BigNumber(a);
        b = new BigNumber(b);
        const flag = a.minus(b).toNumber() > 0;
        return flag;
    }
    /**
       * 比较大小 a >= b 返回true
       * @return {boolean} a是否大于b
       * @param {*} a a
       * @param {*} b b
       */
    gte(a, b) {
        a = new BigNumber(a);
        b = new BigNumber(b);
        const flag = a.minus(b).toNumber() >= 0;
        return flag;
    }

    checkRes(res) {
        if (!res.success) {
            throw new InternalServicesError(res.message);
        }
        return res;
    }

    /**
     * 字符串相加，避免科学技术法
     * @return {string} 相加结果类型字符串
     * @param {string} a 字符串数值a
     * @param {string} b 字符串数值b
     */
    bigAdd(a, b) {
        const x = new BigNumber(a);
        const y = new BigNumber(b);
        const sum = x.plus(y);
        return sum.toString(10);
    }

    /**
     * 字符串相乘，避免科学技术法
     * @return {string} 相除结果
     * @param {string} a 字符串数值a
     * @param {string} b 字符串数值b
     */
    bigMul(a, b) {
        const x = new BigNumber(a);
        const y = new BigNumber(b);
        const sum = x.multipliedBy(y);
        return sum.toString(10);
    }
    /**
     * 字符串相减，避免科学技术法
     * @return {string} 相加结果类型字符串
     * @param {string} a 字符串数值a
     * @param {string} b 字符串数值b
     */
    bigMinus(a, b) {
        const x = new BigNumber(a);
        const y = new BigNumber(b);
        const sum = x.minus(y);
        return sum.toString(10);
    }
    /**
     * 字符串相除，避免科学技术法
     * @return {string} 相除结果
     * @param {string} a 字符串数值a
     * @param {string} b 字符串数值b
     */
    bigDiv(a, b) {
        const x = new BigNumber(a);
        const y = new BigNumber(b);
        const sum = x.dividedBy(y);
        return sum.toString(10);
    }
    bigPow(base, n) {
        return BigNumber(base).pow(n).toString(10);
    }
}

module.exports = {
    BaseController,
    BaseService
};
