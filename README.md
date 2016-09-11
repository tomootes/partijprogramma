# partijprogramma
# this app was deployed using the following tutorial: https://www.digitalocean.com/community/tutorials/how-to-deploy-a-node-js-and-mongodb-application-with-rancher-on-ubuntu-14-04
# using Dockerrr
#
# tom$ docker build -t tomootes/partijprogramma .
# tom$ docker run --name programdb -p 27017:27017 -d mongo:3
# tom$ docker run --name partijprogramma -p 3000:3000 -d -e MONGO_HOST=programdb --link programdb tomootes/partijprogramma