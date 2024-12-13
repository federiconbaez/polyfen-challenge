#!/bin/bash

# Función para crear un archivo si no existe
create_file() {
    if [ ! -f "$1" ]; then
        touch "$1"
        echo "Creado archivo: $1"
    else
        echo "El archivo ya existe: $1"
    fi
}

# Función para crear un directorio si no existe
create_directory() {
    if [ ! -d "$1" ]; then
        mkdir -p "$1"
        echo "Creado directorio: $1"
    else
        echo "El directorio ya existe: $1"
    fi
}

# Crear estructura del proyecto
create_directory "backend"
create_directory "frontend"

# Backend
cd backend
create_directory "config"
create_directory "controllers"
create_directory "middleware"
create_directory "models"
create_directory "routes"
create_directory "utils"

create_file "config.js"
create_file "server.js"
create_file "importCSV.js"

create_file "controllers/prospectController.js"

create_file "middleware/errorHandler.js"
create_file "middleware/validateParams.js"

create_file "models/Prospect.js"

create_file "routes/prospects.js"

create_file "utils/scoreCalculator.js"

# Crear archivo .env para backend
cat << EOF > .env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sales_prospects
CORS_ORIGIN=http://localhost:3000
EOF

echo "Creado archivo .env para backend"

cd ..

# Frontend
cd frontend
create_directory "src"
cd src
create_directory "components"
create_directory "utils"

create_file "App.js"
create_file "config.js"
create_file "index.js"

create_file "components/ErrorMessage.js"
create_file "components/Pagination.js"
create_file "components/ProspectTable.js"

create_file "utils/api.js"

cd ..

# Crear archivo .env para frontend
cat << EOF > .env
REACT_APP_API_BASE_URL=http://localhost:5000
EOF

echo "Creado archivo .env para frontend"

cd ..

# Crear README.md en la raíz del proyecto
cat << EOF > README.md
# Sales Prospects Prototype

Este es un prototipo full-stack mejorado para ayudar al equipo de ventas a identificar prospectos con mayor probabilidad de cerrar negocios exitosos.

## Estructura del Proyecto

\`\`\`
.
├── backend
│   ├── config
│   │   └── config.js
│   ├── controllers
│   │   └── prospectController.js
│   ├── middleware
│   │   ├── errorHandler.js
│   │   └── validateParams.js
│   ├── models
│   │   └── Prospect.js
│   ├── routes
│   │   └── prospects.js
│   ├── utils
│   │   └── scoreCalculator.js
│   ├── .env
│   ├── importCSV.js
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── ErrorMessage.js
│   │   │   ├── Pagination.js
│   │   │   └── ProspectTable.js
│   │   ├── utils
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── config.js
│   │   └── index.js
│   └── .env
└── README.md
\`\`\`

## Instrucciones de Configuración y Ejecución

[Incluir aquí las instrucciones detalladas para configurar y ejecutar el proyecto]
EOF

echo "Creado README.md en la raíz del proyecto"

echo "Estructura del proyecto creada exitosamente."
