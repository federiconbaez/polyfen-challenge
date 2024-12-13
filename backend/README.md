Para inicializar el setup de Node.js en tu proyecto, sigue estos pasos:

1. **Inicializa un nuevo proyecto de Node.js**:
    Abre una terminal y navega al directorio de tu proyecto. Luego, ejecuta el siguiente comando para crear un archivo `package.json`:
    ```sh
    npm init -y
    ```

2. **Instala las dependencias necesarias**:
    Ejecuta los siguientes comandos para instalar las dependencias que estás utilizando en tu código (`express`, `mongoose`, `cors`):
    ```sh
    npm install express mongoose cors
    ```

3. **Instala las dependencias de desarrollo (opcional)**:
    Si necesitas herramientas adicionales para el desarrollo, como `nodemon` para reiniciar automáticamente el servidor cuando hay cambios en el código, puedes instalarlas así:
    ```sh
    npm install --save-dev nodemon
    ```

4. **Configura los scripts en `package.json`**:
    Abre el archivo `package.json` y agrega un script para iniciar el servidor. Por ejemplo:
    ```json
    "scripts": {
      "start": "node /home/fbaez/Documentos/challenge/backend/server.js",
      "dev": "nodemon /home/fbaez/Documentos/challenge/backend/server.js"
    }
    ```

5. **Inicia el servidor**:
    Para iniciar el servidor en modo de desarrollo, ejecuta:
    ```sh
    npm run dev
    ```
    O para iniciar el servidor en modo de producción, ejecuta:
    ```sh
    npm start
    ```

Siguiendo estos pasos, deberías tener tu entorno de Node.js configurado y tu servidor ejecutándose correctamente.
