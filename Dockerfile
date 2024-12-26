# Usa la imagen base de Node.js versión 14.18.0
FROM node:20.10.0-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

RUN ["npm", "run", "build"]
# Expone el puerto por el que se ejecutará la aplicación
EXPOSE 4173

# Comando para iniciar Strapi
CMD ["npm", "run", "preview"]