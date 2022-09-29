// Check


const express = require('express');
const route = express.Router()
const services = require("../services/render")
const controller = require("../controller/controller")
/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description Add patient employee
 * @method GET/add-employee
 */
route.get('/add-employee', services.add_employee);


/**
 * @description for update patient employee
 * @method GET/update-employee
 */
route.get('/update-employee', services.update_employee);

route.get('/view-employee', services.view_employee);

// API


route.post('/api/employee', controller.create);
route.get('/api/employee', controller.find);
route.put('/api/employee/:id', controller.update);
route.delete('/api/employee/:id', controller.delete);
route.get('/api/employee/:id', controller.find);


module.exports = route