
var hooks = require('./hooks');

module.exports = function( app ) {

    app.use('/hooks', hooks);
}