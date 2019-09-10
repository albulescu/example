var request = require('request');

const API = 'https://api.getresponse.com/v3';
const KEY = '7o29381u455dfdgbruethf5dshgrsj5o';

class GetResponse {

    /**
     * Get client by email
     * @param {string} email User email
     * Docs: https://apireference.getresponse.com/#operation/getContactList
     */
    getContactByEmail( email ) {
        return new Promise((resolve, reject) => {
            this.api('get', '/contacts', { email }).then(
                (response) => {
                    resolve(response.body);
                }
            );
        });
    }

    /**
     * Create new contact
     * @param {object} data Contact object
     * Docs: https://apireference.getresponse.com/#operation/createContact
     */
    createContact() {
        //TODO: Write your code here
    }

    updateContact() {
        //TODO: Write your code here
    }

    api( method = 'GET', endpoint, data = {} ) {
        return new Promise((resolve, reject) => {

            const url = `${API}${endpoint}`;

            const config = {
                url,
                method,
                json:true,
                headers: {
                    "X-Auth-Token": `api-key ${KEY}`,
                    "Content-Type": 'application/json',
                },
            };

            if ( method.toLocaleLowerCase() === 'get' ) {
                config.qs = data;
            } else {
                config.body = data;
            }

            request(config, function (err, response, body) {
                
                if ( err ) {
                    return reject(err);
                }

                resolve(response);
            });
        })
    }
}

module.exports = function( config = {} ) {
    return new Promise((resolve, reject) => {
        const service = new GetResponse();
        resolve(service);
    });
}