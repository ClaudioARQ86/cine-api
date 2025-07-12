import express, { urlencoded } from 'express'
import cors from 'cors'
import client from '.src/common/db.js'
import routes from './src/pelicula/routes'

const PORT = 3000 || 4000
const app = express()

app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cors())

app.all('/', (req, res) => {return res.status(200).json({ message: 'Bienvenido al cine Iplacex' })})

app.use('/api', routes)

await client.connect()
.then(() => {
    console.log('Conectado al cluster')
    app.listen(PORT, () => {console.log(`Servidor corriendo en http://localhost:${PORT}`)})
})
.catch(() => {
    console.log('Ha ocurrido un error al conectar al cluster de Atlas')
})



