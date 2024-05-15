FROM node:14

# Directorio de trabajo
WORKDIR /usr/src/app

# Archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Código fuente de la aplicación
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Define el comando por defecto para ejecutar la aplicación
CMD ["node", "app.js"]
