# Portfolio Backend

## Core Stack

- **Node.js**
- **Express**
- **DynamoDb**

## Running project :

#### copy environment variable

```sh
cp .env-sample .env
```

``` bash
$ npm start
$ npm run start:dev
```

### Project Structure
```sh
.
├── app/
│   └── constants             # contains constants files
│   └── controllers           # contains controller files
│   └── logger                # contains pino logger
│   └── serializers           # contains serializer files
│   └── services              # contains services files
│   └── routes.js             # routes config file
├── config/                   # all configuration file here
|   └── index.js              # app configuration
├── public                    # public files
├── views                     # views
├── .gitignore                # specifies intentionally untracked files to ignore
├── app.js                    # API declaration (App entry point)
├── server.js                 # server configuration
└── package.json              # build scripts and dependencies
```

### Node JS Lib
* express
* pino
* pino-pretty
* aws-sdk
* hbs
* twitter

### Node JS Lib dev
* nodemon
* eslint
* dotenv

### Install eslint airbnb

```sh
$ npm install --save-dev eslint
$ npx eslint --init
```

### License

MIT
