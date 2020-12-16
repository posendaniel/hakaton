const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient()

function promisify(command, dbRequest)
{
    return new Promise((resolve, reject) =>
    {
        db[command](dbRequest, (error, data) =>
        {
            error ? reject(error) : resolve(data)
        })
    })
}

class DB
{
    constructor(table)
    {
        this.table = table
    }

    async create(items)
    {
        const dbRequest = 
        {
            RequestItems: { }
        }
    
        const table = dbRequest.RequestItems[this.table] = []
    
        if (!Array.isArray(items)) items = [ items ]
    
        items.forEach(item => 
        {
            table.push({ PutRequest: { Item: item } })
        })
    
        console.info('db write request is: ', JSON.stringify(dbRequest))
    
        return promisify('batchWrite', dbRequest)
    }

    async read(query)
    {
        if (!query) query = {}

        const dbRequest = { TableName: this.table }

        if (query.filter) dbRequest.FilterExpression = query.filter
        if (query.params) dbRequest.ExpressionAttributeValues = query.params

        console.info('db scan query is: ', JSON.stringify(dbRequest))

        return promisify('scan', dbRequest)
    }

    async update(query)
    {
        const dbRequest = 
        { 
            TableName: this.table,
            Key: query.filter,
            UpdateExpression: query.update,
            ExpressionAttributeNames: query.alias || {},
            ExpressionAttributeValues: query.params,
            ReturnValues: 'UPDATED_NEW'
        }

        console.info('db update query is: ', JSON.stringify(dbRequest))

        return promisify('update', dbRequest)
    }

    async delete(query)
    {
        const dbRequest = 
        { 
            TableName: this.table,
            Key: query.filter
        }

        console.info('db update query is: ', JSON.stringify(dbRequest))

        return promisify('delete', dbRequest)
    }
}

exports.DB = DB
