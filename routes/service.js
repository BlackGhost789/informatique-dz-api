const serviceRouter = require('express').Router();
const {createService, getServices, getServiceById, updateService} = require('../controllers/service.controller')


serviceRouter.post('/', createService);
serviceRouter.get('/', getServices);
serviceRouter.get('/:serviceId', getServiceById);
serviceRouter.put('/:serviceId', updateService)

module.exports = serviceRouter;