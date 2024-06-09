const Service = require('../models/Service')

const createService = async (req, res) => {
    const serviceCreated = await Service.create(req.body)
    console.log('service created');
    res.send(serviceCreated)
}

const getServices = async (req, res) => {
    const services = await Service.find();
    res.send(services)
}

const getServiceById = async (req, res) => {
    const serviceId = req.params.serviceId;
    const service = await Service.findById(serviceId)
    res.send(service)
}

const updateService = async (req, res) => {
    const serviceId = req.params.serviceId;
    const service = await Service.findByIdAndUpdate(serviceId, req.body);
    console.log('service updated');
    res.send(service);
}

module.exports = {createService, getServices, getServiceById, updateService}