FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

RUN sed -i 's/listen\s\+80;/listen 3000;/' /etc/nginx/conf.d/default.conf


CMD ["nginx", "-g", "daemon off;"]
