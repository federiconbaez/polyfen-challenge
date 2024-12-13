# Sales Prospects Prototype

Este es un prototipo full-stack mejorado para ayudar al equipo de ventas a identificar prospectos con mayor probabilidad de cerrar negocios exitosos.

## Estructura del Proyecto

```
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
```

## Instrucciones de Configuración y Ejecución


La aplicación se abrirá en tu navegador en `http://localhost:3000`.

## Mejoras implementadas

1. Configuración centralizada para backend y frontend.
2. Utilización de un router Express para manejar las rutas.
3. Implementación de controladores para separar la lógica de negocio.
4. Middleware para validación de parámetros y manejo de errores.
5. Utilización de un util de axios para manejar las peticiones API en el frontend.
6. Componentes React separados para mejorar la modularidad y mantenibilidad.
7. Manejo de estados y efectos mejorado en el componente principal.
8. Implementación de un sistema de paginación más robusto.
9. Mejor manejo de errores y estados de carga en el frontend.

## Cálculo del puntaje

El puntaje se calcula en el archivo `backend/utils/scoreCalculator.js` basándose en varios factores:

1. Años de experiencia (0-10 puntos): Se asigna un punto por cada año de experiencia, hasta un máximo de 10 puntos.
2. Industria (0-10 puntos): Se asignan puntos según la industria, con tecnología y finanzas recibiendo los puntajes más altos.
3. Tamaño de la empresa (0-10 puntos): Las empresas grandes reciben más puntos, seguidas por las medianas y pequeñas.
4. Título del puesto (0-10 puntos): Los CEO y CTO reciben 10 puntos, los gerentes 5 puntos.

El puntaje total se calcula sumando estos factores y se limita a un máximo de 100 puntos.

Esta lógica de puntuación se basa en la suposición de que los prospectos con más experiencia, en industrias de alto valor, en empresas más grandes y en puestos de liderazgo tienen más probabilidades de cerrar negocios exitosos. Sin embargo, esta lógica puede y debe ser ajustada basándose en datos reales y retroalimentación del equipo de ventas.

## Próximos pasos

1. Implementar autenticación y autorización.
2. Agregar funcionalidad para editar y eliminar prospectos.
3. Implementar pruebas unitarias y de integración.
4. Optimizar el rendimiento de la base de datos con índices.
5. Agregar más métricas y visualizaciones para el análisis de prospectos.
