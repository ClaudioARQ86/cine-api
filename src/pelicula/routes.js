import express from 'express'
import * as controller from './controller.js'

const routes = express.Router()

routes.post('/pelicula', controller.HandleInsertPeliculaRequest)
routes.get('/peliculas', controller.HandleGetPeliculasRequest)
routes.get('/pelicula/:id', controller.HandleGetPeliculaRequest)
routes.put('/pelicula/:id', controller.HandleUpdatePeliculaRequest)
routes.delete('/pelicula/:id', controller.HandleDeletePeliculaRequest)

export default routes