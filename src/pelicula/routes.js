import express from 'express'
import controller from './controller'

const routes = express.routes ()

routes.post('/pelicula', controller.handleInsertPlantaRequest)
routes.get('/pelicula', controller.handleGetPlantasRequest)
routes.get('/pelicula/:id', controller.handleGetPlantaRequest)
routes.put('/pelicula', controller.handleUpdatePlantaRequest)
routes.delete('/pelicula/:id', controller.handleDeletePlantaRequest)

export default routes