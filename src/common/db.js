import { MongoClient, ServerApiVersion } from "mongodb"

const uri = 'mongodb+srv://creyesq1986:Yz5jIolxnQx67JX6@eva-u3-express.lwura92.mongodb.net/?retryWrites=true&w=majority&appName=eva-u3-express'

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export default client