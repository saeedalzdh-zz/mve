FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD supersecret  
ENV MYSQL_DATABASE TODO  
ENV MYSQL_USER user  
ENV MYSQL_PASSWORD supersecret

ADD setup.sql /docker-entrypoint-initdb.d