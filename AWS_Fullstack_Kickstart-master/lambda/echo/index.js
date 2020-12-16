const { service } = require('./adapters/http')

exports.handler = service
({
    ping: async () =>
    {
        return { value: new Date().getTime().toString(36) }
    }
})

/*

>>>
    ping entry test
    ===============
    {
        "action": "ping"
    }
<<<

*/
