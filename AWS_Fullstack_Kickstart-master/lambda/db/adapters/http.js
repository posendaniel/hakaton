function response(payload, code)
{
    const headers = 
    {
        'content-type': 'application/json'
    }

    return { statusCode: code || 200, body: JSON.stringify(payload || {}), headers }
}

exports.service = routes =>
{
    const router = async event =>
    {
        try
        {   
            const payload = event.body || event || {}
            const request = payload instanceof Object ? payload : JSON.parse(payload)

            const handler = routes[request.action]

            if (!handler) throw new Error(`event action "${request.action}" is invalid route`)

            var result = handler(request.payload)
            
            if (result instanceof Promise) result = await result

            return response(result.data || result, result.code)
        }
        catch(error)
        {
            return response({ name: error.name, message: error.message }, 500)
        }
    }

    return router
}
