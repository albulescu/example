var request = require('request');

const API = 'https://api.getresponse.com/v3/';
const KEY = 'jfgs8jh4ksg93ban9Dfgh8';

class GetResponse {

    /**
     * Get client by email
     * @param {string} email User email
     * Docs: https://apireference.getresponse.com/#operation/getContactList
     */
    getContactByEmail(email) {
        //TODO: 
    }

    /**
     * Create new contact
     * @param {object} data Contact object
     * Docs: https://apireference.getresponse.com/#operation/createContact
     */
    createContact( data ) {
        //TODO: 
    }

    api( method = 'GET', endpoint ) {
        request({
            method,
            url: `${API}${endpoint}`,
            qs: { email },
            headers: {
                "X-Auth-Token": `api-key ${KEY}`,
            },
        }, function (err, response, body) {
            console.log();
        })
    }
}

module.exports = function( config = {} ) {
    return new Promise((resolve, reject) => {
        const service = new GetResponse();
        //TODO: Authenticate and return working instance
        resolve(service);
    });
}