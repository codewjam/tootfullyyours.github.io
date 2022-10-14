const express = require('express');
const route = express.Router()

const services = require('../services/render');

/**
 * @description Root Route
 * @method GET /
 */


route.get('/', services.homeRoutes);

/**
 * @description add items
 * @method GET /add-item 
 */

route.get('/add-item', services.add_item)

/**
 * @description update items
 * @method GET /update-item 
 */

route.get('/update-item', services.update_item)


module.exports = route