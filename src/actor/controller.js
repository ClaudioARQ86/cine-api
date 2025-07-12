import { ObjectId } from "mongodb";
import client from "../common/db.js";
import { Actor } from "../actor/actor.js";

const actorCollection = client.db('cine').collection('actores')

// Configuración para agregar un actor dentro de la colección
async function HandleInsertActorRequest(req, res) {
    let data = req.body;
    let actor = Actor;

    actor.nombre = data.nombre;
    actor.apellido = data.apellido;
    actor.fechaNacimiento = data.fechaNacimiento;

    await actorCollection.insertOne(actor)
        .then((data) => {
            if (data === null) return res.status(400).send('Error al guardar registro');
            return res.status(201).send(data);
        })
        .catch((e) => { return res.status(500).send({ error: e }) });
}

// Configuración para obtener todos los registros desde la colección
async function HandleGetActorsRequest(req, res) {
    await actorCollection.find({}).toArray()
        .then((data) => { return res.status(200).send(data) })
        .catch((e) => { return res.status(500).send({ error: e }) });
}

// Configuración para obtener un actor en base a su ID
async function HandleGetActorByIdRequest(req, res) {
    let id = req.params.id

    try {
        let oid = ObjectId.createFromHexString(id);
        await actorCollection.findOne({ _id: oid })
        .then((data) => {
            if (data === null) return res.status(404).send('Actor no encontrado')
            return res.status(200).send(data)
        })
        .catch((e) => { return res.status(500).send({ code: e.code }) })
    } catch (e) {
        return res.status(400).send('Id mal formado')
    }
}

// Configuración para obtener todos los actores de una pelicula
async function HandleGetActorsByPeliculaRequest(req, res) {
    let peliculaId = req.params.peliculaId;

    try {
        let oid = ObjectId.createFromHexString(peliculaId);
        await actorCollection.find({ peliculas: oid }).toArray()
        .then((data) => { return res.status(200).send(data) })
        .catch((e) => { return res.status(500).send({ error: e }) });
    } catch (e) {
        return res.status(400).send('Id mal formado');
    }
}


export { HandleInsertActorRequest, HandleGetActorsRequest, HandleGetActorByIdRequest, HandleGetActorsByPeliculaRequest };