# command to run docker container
# -it is for starting the container in interactive mode
# -rm for removing the container after exiting.
# -v ${PWD}:/app is for mounting the codes into the directory /app
# -p for specifying the port that can be access from local machine
# -e is for enabling the hot-reloading feature via chokidar machanism.
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sde-project:latest