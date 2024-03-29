FROM node:18.11.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
