# How To

## Getting Started
- Clone this repository
- Install dependencies
    ```
    yarn install
    ```
*Note: The prebuild prism-cli binary in this repo is only for windows, if you use a different OS you can build the binary by yourself from this [source](https://github.com/nursanamar/prism/tree/fix-build)*

## Usage

### Defining API endpoint

The way we define our API using TSOA is by making a controller file (controller as in MVC framework), the controller will be where we define the endpoint path, method, etc. 

To start creating a definition for an API, create a controller file in `src\controllers`,  you can follow this [guide](https://tsoa-community.github.io/docs/getting-started.html#defining-our-first-model) or look at the example controller in `src\controllers\example.ts`

After making the controller run command `yarn build` to generate the OpenAPI Document and API Documentation. the OpenAPI Document will be saved in `build` directory and API documentation will be saved as `redoc-static.html ` in the root directory.

For a more advance definition see [TSOA documentation](https://tsoa-community.github.io/docs/introduction.html).

### Mock Server
After generating OpenAPI Document we can use it as input to run the mock server, to start the mock server use this command:
```
yarn start
```
It will run a server in port 4010 in mock mode, to use the proxy mode use this command:
```
yarn start:proxy <real server base url>
```

For more advanced usage see [Prism documentation](https://docs.stoplight.io/docs/prism).

