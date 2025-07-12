# Cine API - Evaluación Unidad 3

## Descripción
API REST para administración de películas favoritas de trabajadores y colaboradores en Iplacex. Desarrollada con Node.js, Express y MongoDB.

## Tecnologías Utilizadas
- **JavaScript**: Lenguaje de programación principal
- **Express Framework**: Servidor web
- **CORS**: Configuración para orígenes cruzados
- **MongoDB Driver**: Conexión y administración de registros
- **MongoDB Atlas**: Servicio de almacenamiento en la nube

## Estructura del Proyecto
```
cine-api/
├── src/
│   ├── common/
│   │   └── db.js              # Configuración de MongoDB
│   ├── pelicula/
│   │   ├── pelicula.js        # Modelo de película
│   │   ├── controller.js      # Controladores de película
│   │   └── routes.js          # Rutas de película
│   └── actor/
│       ├── actor.js           # Modelo de actor
│       ├── controller.js      # Controladores de actor
│       └── routes.js          # Rutas de actor
├── server.js                  # Servidor principal
├── package.json              # Dependencias del proyecto
└── .gitignore                # Archivos ignorados por Git
```

## Instalación
```bash
npm install
```

## Ejecución
```bash
npm start
```

## Endpoints Disponibles

### Películas
- `POST /api/pelicula` - Crear nueva película
- `GET /api/pelicula` - Obtener todas las películas
- `GET /api/pelicula/:id` - Obtener película por ID
- `PUT /api/pelicula/:id` - Actualizar película
- `DELETE /api/pelicula/:id` - Eliminar película

### Actores
- `POST /api/actor` - Crear nuevo actor
- `GET /api/actor` - Obtener todos los actores
- `GET /api/actor/:id` - Obtener actor por ID
- `GET /api/actor/pelicula/:peliculaId` - Obtener actores de una película

## Autor
Iplacex - Claudio Reyes Quiroga

## Licencia
Apache-1.0
