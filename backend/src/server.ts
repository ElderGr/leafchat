import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json({
        message: 'hello world'
    })
})  

app.listen(5000, () => {
    console.log('Server started on port 5000 🚀')
})