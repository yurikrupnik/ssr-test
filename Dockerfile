FROM nginx:alpine
COPY ./dist/assets /usr/share/nginx/html

#FROM node
#
#WORKDIR /usr/src/app
#COPY dist .
#RUN npm install --only=production
#
#EXPOSE 7000
#CMD ["npm", "start"]
