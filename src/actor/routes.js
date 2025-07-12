import express from 'express'
import controller from './controller.js'

const routes = express.Router()

routes.post('/actor', controller.HandleInsertActorRequest)
routes.get('/actor', controller.HandleGetActorsRequest) 
routes.get('/actor/:id', controller.HandleGetActorByIdRequest)
routes.get('/actor/pelicula/:peliculaId', controller.HandleGetActorsByPeliculaRequest)

export default routes