import { ObjectId } from 'mongodb';
import client from '../common/db.js';
import { Pelicula } from '../pelicula/pelicula.js'

const peliculaCollection = client.db('cine').collection('peliculas')

// Configuración para agregar una pelicula dentro de la colección
async function HandleInsertPlantaRequest(req, res) {
    let data = req.body
    let pelicula = Pelicula

    pelicula.nombre = data.nombre
    pelicula.genero = data.genero
    pelicula.anioEstreno = data.anioEstreno
    
    await peliculaCollection.insertOne(pelicula)
    .then((data) => {
        if(data === null) return res.status(400).send('Error al guardar registro')
        return res.status(201).send(data)
    })
    .catch ((e) => {return res.status(500).send({ error: e })})
}

// Configuración para obtener todos los registro desde la colección
async function HandleGetPeliculasRequest(req, res) {
    await peliculaCollection.find({}).toArray()
    .then((data) => {return res.status(200).send(data)})
    .catch ((e) => {return res.status(500).send({ error: e })})
}

// Configuración para obtener una pelicula en base a su ID
async function HandleGetPeliculaRequest(req, res) {
    let id = req.params.id

    try{
        let oid = ObjectId.createFromHexString(id)
        await peliculaCollection.findOne({ _id: oid })
        .then((data) => {
            if(data === null) return res.status(404).send(data)})
        .catch ((e) => {return res.status(500).send({ code: e.code })})
    }catch(e){
        return res.status(400).send('Id mal formado')
    }
}

// Configuración para actualizar los valores de una pelicula
async function HandleUpdatePeliculaRequest(req, res) {
    let id = req.params.id
    let pelicula = req.body

    try{
        let oid = ObjectId.createFromHexString(id)
        let query = {$set: {pelicula}}
        await peliculaCollection.updateOne({ _id: oid }, query)
        .then((data) => {return res.status(200).send(data)})
        .catch ((e) => {return res.status(400).send({ code: e.code })})
    }catch(e){
        return res.status(400).send('Id mal formado')
    }
}

// Configuración para eliminar una pelicula en base a su ID
async function HandleDeletePeliculaRequest(req, res) {
    let id = req.params.id

    try{
        let oid = ObjectId.createFromHexString(id)
        await peliculaCollection.deleteOne({ _id: oid })
        .then((data) => {return res.status(200).send(data)})
        .catch ((e) => {return res.status(500).send({ code: e.code })})
    }catch(e){
        return res.status(400).send('Id mal formado')
    }
}
S
export { HandleInsertPlantaRequest, HandleGetPeliculasRequest, HandleGetPeliculaRequest, HandleUpdatePeliculaRequest, HandleDeletePeliculaRequest }

