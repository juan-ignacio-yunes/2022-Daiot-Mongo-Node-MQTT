const mongoose = require('mongoose');
const moment = require('moment-timezone');

const logsSchema = mongoose.Schema({
    logId: {
        type: Number,
        require: true
    },
    ts: {
        type: String,
        require: true,
        default: () => moment().tz("America/Argentina/Buenos_Aires").format("YYYY-MM-DD HH:mm:ss (GMT-3)")//new Date().getTime()
    },
    etemperatura: {
        type: Number,
    },
    ehumedad: {
        type: Number,
    },
    nodoId: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Logs', logsSchema);
