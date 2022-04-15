import * as express from 'express'
import "reflect-metadata"
import { getRepository } from 'typeorm'
import getConnection from './database'
import User from './entities/User'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  try{
    const repository = getRepository(User)

    return res.json(await repository.find())
  }catch(err){
    console.log(err)
    return res.json(err)
  }
})

app.listen(5000, async () => {
    await getConnection()
    console.log('Server started on port 5000 🚀')
})
