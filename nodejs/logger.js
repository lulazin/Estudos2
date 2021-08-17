const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', function message(){
        fs.appendFile(path.join(__dirname, 'log.txt'),message.toString(), function (err) {
        if (err) throw err;
    })
})

function log(message) {
    emitter.emit('log', message)
}
//console.log(emitter.listeners('log'));
//emmiter.emit('log','leo')

module.exports = log