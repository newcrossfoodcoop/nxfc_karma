FROM node:4.6-slim

MAINTAINER Ben Simpson, ben@newcrossfoodcoop.org.uk

WORKDIR /home/karma

# Install fonts for PhantomJS
RUN apt-get update \
    && apt-get install -y libfontconfig libfreetype6 bzip2\
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g gulp

ADD package.json /home/karma
RUN npm install

ADD gulpfile.js /home/karma
ADD karma.conf.js /home/karma
ADD demo /home/karma/demo

CMD gulp
