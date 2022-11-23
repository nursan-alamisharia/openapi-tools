import { Route, Get, Controller, Query, Security } from "tsoa";
import { PaginatedData } from "../types/commons";

@Route("user")
@Security("JWT")
export class UserController extends Controller {
    
    /**
     * Get list of user with pagination
     * @summary User List
     * @isInt page
     * @isInt perpage
     * @param {number} [perpage=10] Number of elements per page
     * @param {number} page page
     */
    @Get()
    public GetUserList(
        @Query() page: number,
        @Query() perpage: number = 10
    ): PaginatedData<User> {
        return {
            page: 1,
            totalElements: 10,
            size: 10,
            elements: []
        }
    }
}

/**
 * @example {  "name": "Nursan",  "gender": "male",  "age": 23 }
 */
type User = {
    /**
     * @isInt
     * @maxLength 100
     * @minLength 1
     */
    id: number;
    /**
     * @extension {"x-faker": "name.firstName"}
     */
    name: string;
    gender: "male" | "female";
    /**
     * @isInt
     * @extension {"x-faker": {"datatype.number": {"max": 40, "min": 0}}}
     */
    age: number;
}