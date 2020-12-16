const { service } = require('./adapters/http')
const { DB } = require('./adapters/db')
const db = new DB('test-table')

async function createItem(value)
{
    if (!value) value = new Date().getTime().toString(36)

    const item = 
    {
        id: parseInt(Math.random() * 10000),
        value
    }

    await db.create(item)

    return { data: item, code: 201 }
}

async function readItems(query)
{
    return await db.read(query)
}

async function updateItem(query)
{
    return await db.update(query)
}

async function deleteItem(query)
{
    return await db.delete(query)
}

exports.handler = service
({
    create: createItem,     //  C
    read: readItems,        //  R
    update: updateItem,     //  U
    delete: deleteItem      //  D   
})


/*
test suit for dynamo db table
=============================

setup: create a new table in dynamo db named `test-table` with key field named `id` of type `number`

>>>
    create entry test
    =================
    {
        "action": "create",
        "payload": "yay"
    }

    # omit payload to generate random value
<<<

>>>
    read entry test
    ===============
    {
        "action": "read",
        "payload": 
        {
            "filter": "id = :id",
            "params":
            {
                ":id": 5181
            }
        }
    }

    # omit payload to query entire table
<<<

>>>
    update entry test
    =================
    {
        "action": "update",
        "payload": 
        {
            "filter":
            {
                "id": ITEM_ID
            },
            "update": "set #val = :value",
            "alias":
            {
                "#val": "value"
            },
            "params":
            {
                ":value": "ITEM_VALUE"
            }
        }
    }

    # replace ITEM_ID with an actual item id
    # replace ITEM_VALUE with your desired item new value
<<<

>>>
    delete entry test
    =================
    {
        "action": "delete",
        "payload": 
        {
            "filter":
            {
                "id": ITEM_ID
            }
        }
    }

    # replace ITEM_ID with an actual item id
<<<


*/
