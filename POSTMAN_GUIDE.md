# 📋 API REST CINE - Guía para Postman

## 🚀 Servidor
- **URL Base**: `http://localhost:3000`
- **Puerto**: 3000
- **Estado**: ✅ Funcionando

---

## 🎬 ENDPOINTS DE PELÍCULAS

### 1. **Crear Película**
- **Método**: `POST`
- **URL**: `http://localhost:3000/api/pelicula`
- **Headers**: 
  - `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "nombre": "Inception",
  "genero": ["Ciencia Ficción", "Thriller"],
  "anioEstreno": 2010
}
```

### 2. **Obtener Todas las Películas**
- **Método**: `GET`
- **URL**: `http://localhost:3000/api/peliculas`

### 3. **Obtener Película por ID**
- **Método**: `GET`
- **URL**: `http://localhost:3000/api/pelicula/{id}`
- **Ejemplo**: `http://localhost:3000/api/pelicula/687300394755dea5599989cf`

### 4. **Actualizar Película**
- **Método**: `PUT`
- **URL**: `http://localhost:3000/api/pelicula/{id}`
- **Headers**: 
  - `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "nombre": "Inception - Director's Cut",
  "genero": ["Ciencia Ficción", "Thriller", "Drama"],
  "anioEstreno": 2010
}
```

### 5. **Eliminar Película**
- **Método**: `DELETE`
- **URL**: `http://localhost:3000/api/pelicula/{id}`

---

## 🎭 ENDPOINTS DE ACTORES

### 1. **Crear Actor**
- **Método**: `POST`
- **URL**: `http://localhost:3000/api/actor`
- **Headers**: 
  - `Content-Type: application/json`
- **Body (JSON)**:
```json
{
  "idPelicula": "687300394755dea5599989cf",
  "nombre": "Leonardo DiCaprio",
  "edad": 48,
  "estaRetirado": false,
  "premios": ["Oscar", "Golden Globe", "BAFTA"]
}
```

### 2. **Obtener Todos los Actores**
- **Método**: `GET`
- **URL**: `http://localhost:3000/api/actores`

### 3. **Obtener Actor por ID**
- **Método**: `GET`
- **URL**: `http://localhost:3000/api/actor/{id}`
- **Ejemplo**: `http://localhost:3000/api/actor/68730dc64755dea5599989d3`

### 4. **Obtener Actores por Película**
- **Método**: `GET`
- **URL**: `http://localhost:3000/api/actores/pelicula/{idPelicula}`
- **Ejemplo**: `http://localhost:3000/api/actores/pelicula/687300394755dea5599989cf`

---

## 🔧 CONFIGURACIÓN DE POSTMAN

### Headers Requeridos:
```
Content-Type: application/json
Accept: application/json
```

### Variables de Entorno (Opcional):
- **base_url**: `http://localhost:3000`
- **api_prefix**: `/api`

---

## ✅ RESPUESTAS ESPERADAS

### Códigos de Estado:
- **200**: OK - Operación exitosa
- **201**: Created - Recurso creado exitosamente
- **400**: Bad Request - Error en los datos enviados
- **404**: Not Found - Recurso no encontrado
- **500**: Internal Server Error - Error del servidor

### Ejemplos de Respuestas:

#### ✅ Éxito (200/201):
```json
{
  "acknowledged": true,
  "insertedId": "687300394755dea5599989cf"
}
```

#### ❌ Error (404):
```json
"No se encontraron actores para esta película"
```

---

## 🧪 CASOS DE PRUEBA SUGERIDOS

### 1. **Flujo Completo**:
1. Crear una película
2. Obtener todas las películas
3. Crear actores para esa película
4. Obtener actores por película
5. Actualizar la película
6. Eliminar un actor
7. Eliminar la película

### 2. **Casos de Error**:
- Buscar película con ID inexistente
- Buscar actores con ID de película inexistente
- Enviar datos incompletos
- Usar IDs mal formados

---

## 📱 IMPORTAR EN POSTMAN

1. Abre Postman
2. Crea una nueva Collection llamada "Cine API"
3. Crea las requests según los endpoints documentados
4. Configura las variables de entorno
5. Ejecuta las pruebas

---

## 🔍 VERIFICACIÓN

Tu API está **COMPLETAMENTE PREPARADA** para ser administrada con Postman:

✅ **Servidor funcionando** en puerto 3000
✅ **CORS habilitado** para requests desde cualquier origen
✅ **JSON parsing** configurado para recibir datos
✅ **Rutas RESTful** implementadas
✅ **Manejo de errores** apropiado
✅ **Códigos de estado HTTP** correctos
✅ **Operaciones CRUD** completas

**¡Tu API cumple completamente con el requisito de administración por cliente HTTP!** 🎯
