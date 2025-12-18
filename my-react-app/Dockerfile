# STAGE 1: Fronted build
FROM node:24-alpine3.22 AS frontend_build

WORKDIR /app
COPY frontend .

RUN rm -rf node_modules
RUN npm i --ignore-scripts
RUN npm run build

# STAGE 2: Final image
FROM node:24-alpine3.22

WORKDIR /app
COPY backend .
RUN npm i
COPY --from=frontend_build /app/dist/ /app/frontend/dist

EXPOSE 8085

CMD ["node", "index.js"]