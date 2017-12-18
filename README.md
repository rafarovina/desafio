# About

This app solves the [S2 coding test](./REQUIREMENTS.md)

# Setting up the environment

### Setting up using docker

Make sure you have docker installed, if you don't - [install it](https://get.docker.com/).

Execute the following command in order to start a container:

```bash
docker run \
  -ti --rm \
  --name s2-test \
  -v $PWD:/s2-battle \
  -w /s2-battle \
  node bash
```

### Setting up using node

Go to [NodeJS download page](https://nodejs.org/en/download/) and install the correct version according to your machine.

After you're done, install [Yarn](https://yarnpkg.com/lang/en/docs/install/).

# Installing dependencies

Before you can run the app you must install the dependencies, run:

```bash
yarn install
```

It will work either on your local machine or docker container.

# Running the app

### Development mode

Simple run:

```bash
yarn start
```

If you're using docker, make sure to open the **On Your Network** link.

### Production mode

Build the project:

```bash
yarn build
```

And use your favorite tool/app to start a HTTP server on the build folder.

# Extras

### Multiplayer

The structure of the app allows you to easily add more players to it. The last survivor is the winner.

If you want to add more players, go to [battleReducer.js](./src/reducers/battleReducer.js) and edit the initialState. *Don't forget to add the id*

### PWA

If open it on Google Chrome your Andoird phone you can choose a option "**Add to home screen**" to have it working offline.

