'use strict';

/**
 * making service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::making.making');
