const clientRouter = require('express').Router();
const {createClient, getClients, getClientById, updateClient} = require('../controllers/client.controller')


clientRouter.post('/', createClient)
clientRouter.get('/', getClients)
clientRouter.get('/:idClient', getClientById)
clientRouter.put('/:idClient', updateClient)

module.exports = clientRouter;