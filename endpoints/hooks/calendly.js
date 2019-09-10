/**
 * Called when new appoiment created on Calendly
 * Read more about req.body - https://developer.calendly.com/docs/sample-webhook-data#section-body
 */
function onCalendlyEvent(req, res) {
    req.service("getresponse").then(
        (service) => {
            //TODO: Write your code here
            res.send("OK");
        }
    )
}

module.exports = function( app ) {
    app.post('/appoiments', onCalendlyEvent);
}