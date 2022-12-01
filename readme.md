# OpenAPI Tools

## Overview
A compilation of tools to write, create a mock server, and generate documentation for OpenAPI Documents.

This tool consists of 3 main parts:
- Generate OpenAPI Documents.
- Mock Server from The Generated OpenAPI Documents.
- Generate Documentation from The Generated OpenAPI Documents.

### Generating OpenAPI Documents
An OpenAPI document is written using JSON or YAML syntax with structure following the OpenAPI Specification, but writing a long JSON or YAML is tedious and not fun, so in this tool, we are using a tool called TSOA. 

To quote from the official documentation 
> "TSOA is a framework with integrated OpenAPI compiler to build Node.js serve-side applications using TypeScript"

but we will only use their OpenAPI compiler to generate our OpenAPI document using TypeScript. 

Using a TypeScript to define our OpenAPI Document has a lot of benefits, for example, we can use Interface to define and reuse a common data structure on our API and define type aliases for data with specific type formats. TSOA also provides a way to write a description for our API using JSDoc so we can have more descriptive API documentation. 

To learn more check [TSOA documentation](https://tsoa-community.github.io/docs/).

### Creating Mock Server
To create a mock server we will be using a tool called Prism, Prism will take an OpenAPI Document as input and then will start a mock server that we can use. 

The prism mock server will automatically generate a response based on the response definition in the OpenAPI Document. We can also define a response example or use Faker to generate random data for the response. 

Prism not only can be used as a mock but also as a validation proxy to validate requests and responses according to the OpenAPI Document this is to make sure both the client and the server comply with the API Contract that is defined in the OpenAPI Document. 

![Mock Proxy server](/docs/images/mox.png)

When in a proxy mode Prism will sit between the client and the server, client request will be sent to the Prism server and then will be forwarded to the real server just like what a proxy server would be. Any request to an endpoint that has not yet been implemented in the real server Prism will respond with mocked data to the client. 

To learn more check [Prism documentation](https://docs.stoplight.io/docs/prism).

### Generating API Documentation
To generate documentation we will be using Redocly, It will create beautiful and easy-to-read documentation from OpenAPI Document, we only need an OpenAPI Document file as input and then it will produce an HTML Page.

Here is a demo https://redocly.github.io/redoc

To learn more check [Redocly documentation](https://redocly.com/docs).


