import express from 'express'
import * as controller from './controller.js'

const routes = express.Router()

routes.post('/actor', controller.HandleInsertActorRequest)
routes.get('/actores', controller.HandleGetActorsRequest) 
routes.get('/actor/:id', controller.HandleGetActorByIdRequest)
routes.get('/actores/pelicula/:idPelicula', controller.HandleGetActorsByPeliculaRequest)

export default routes