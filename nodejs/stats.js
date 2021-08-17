const os = require('os')
const log = require('./logger')

setInterval(() => {

    const  { freemem, totalmem } = os

    const realfreemem = parseInt(freemem / 1024 / 1024)
    const realtotalmem = parseInt(totalmem / 104 / 1024)
    const percent = parseInt((realfreemem / realtotalmem) * 100)
    
    const stats = {
        free: `${realfreemem}MB`,
        total: `${realtotalmem}MB`,
        usage: `${percent}MB`
    }
    console.clear()
    console.table(stats)
    log(stats)
}, 1000)

