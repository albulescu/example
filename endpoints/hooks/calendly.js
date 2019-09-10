/**
 * Called when new appoiment created on Calendly
 * Read more about req.body - https://developer.calendly.com/docs/sample-webhook-data#section-body
 */
function onCalendlyEvent(req, res) {
    req.service("getresponse").then(
        (service) => {
            service.getContactByEmail(req.body.email).then(
                (contact) => {
                    res.json(contact);
                    //TODO: Write your code here
                }
            );
        }
    )
}

module.exports = function( app ) {
    app.post('/calendly_appoiments', onCalendlyEvent);
}