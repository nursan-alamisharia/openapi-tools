# Motivation

This tool is created to help the use of API Design First development, where before we write an implementation of an API,  all stakeholders need to agree on how the API will look like, the agreement is called an API Contract. The tool is not only to help make an API Contract but also to get the most uses from an API Contract thanks to the OpenAPI Specification, we can use the contract to create a mock server, validation tools, code generation, etc. See [https://openapi.tools/](https://openapi.tools/)

API Contract contains information about endpoint path, URL/body params, response data, etc. Here is a typical example of an API Contract:

    
    GET /users
    
    Returns all users in the system.
    URL Params
    None
    Data Params
    None
    Headers
    Content-Type: application/json  
    Success Response:
        Code: 200  
        Content:
    
        {
        users: [
                {<user_object>},
                {<user_object>},
                {<user_object>}
                ]
        }
    
    ---
To get the most uses from our API Contract we can write our contract  as OpenAPI Document using OpenAPI Specification, this offers a lot of benefits:
- It makes our API Contract use a standard way to describe/define an API.
- Our API Contract is now machine-readable, which opens a possibility for automation.
- A lot of tools to make life easier. See [https://openapi.tools/](https://openapi.tools/)


*Refrences:*
- https://swagger.io/resources/articles/adopting-an-api-first-approach/
- https://swagger.io/specification/
- https://swagger.io/blog/api-design/openapi-driven-api-design/
- https://spec.openapis.org/oas/latest.html