import * as express from 'express'
import "reflect-metadata"
import { getConnection } from './database'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        message: 'hello world'
    })
})  

app.listen(5000, async () => {
    await getConnection();
    console.log('Server started on port 5000 🚀')
})