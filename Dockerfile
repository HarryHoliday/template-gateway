# alpine has a sh shell
FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./build .

COPY ./entrypoint.sh .

RUN chmod 755 ./entrypoint.sh

RUN ls -al

ENTRYPOINT ["./entrypoint.sh"]
