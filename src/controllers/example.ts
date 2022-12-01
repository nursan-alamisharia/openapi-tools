/**
 * A simple example of endpoint definition using tsoa.
 */

import { PaginatedData } from "../types/commons";
import { Route, Get, Controller, Query } from "tsoa";

@Route("foo")
export class ExampleController extends Controller {
    
    /**
     * We can put the description here for each operations.
     * We can also add description for request paramater here
     * using JSDoc format.
     * @summary List Foo items
     * @param {number} page data pagination page
     * @param {number} size how many data per-page
     * @isInt page
     * @isInt size
     */
    @Get()
    public listFoo(
        // we define url param as the method param using @Query decorator
        @Query() page: number, 
        @Query() size: number = 10 // we can also define a param as optional or have default value just like a paramater in function
    ): PaginatedData<Foo> { // we define operation as a method 

        // If we use TSOA as framework, here is where we write the implementation of the API.
        // But since we only use it to generate OpenAPI Documents, 
        // we just need to return dummy data to satisfy the method return type.
        return {
            elements: [],
            page: 1,
            size: 10,
            totalElements: 10
        }
    }


}

/**
 * We can put description and another information for each property
 * using JSDoc and anotation from tsoa.
 * We also can provide example data for this model using anotation from tsoa
 * @example {
 *  "id": "A01111"
 *  "name": "Foobar",
 *  "lang": "id",
 *  "length": 20
 * }
 */
type Foo = {
    id: string;
    /**
     * We can also put description here to describe the property
     */
    name: string;
    lang: "id" | "en";
    /**
     * @isInt 
     * @minimun 1
     */
    length: number;
}