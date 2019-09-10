

const SERVICES = {
    'getresponse' : require('./getresponse'),
}

module.exports = function(req, res, next) {

    /**
     * Get a service at runtime
     * @param {string} name Name of the service to instantiate
     */
    req.service = function( name, config = {} ) {
        if (SERVICES.hasOwnProperty(name)) {
            const service = SERVICES[name];
            return service(config).catch(() => console.log(`Failed to create service ${name}`));
        }

        Promise.reject(`Service with name "${name}" is not found`);
    }

    next();
}