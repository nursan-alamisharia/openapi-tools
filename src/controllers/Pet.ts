import { PaginatedData } from "../types/commons";
import { Controller, Get, Route } from "tsoa";

@Route("pet")
export class PetController extends Controller {
    /**
     * Get Pet List Paginated
     * @summary Pet list
     * @isInt userId
     */
    @Get("{userId}")
    public GetList(
        userId: number
    ) : PaginatedData<Pet> {
        return {
            elements: [],
            page: 0,
            size: 0,
            totalElements: 0
        }
    }
}

type Pet = {
    /**
     * @extension {"x-faker": "name.firstName"}
     */
    name: string;
    /**
     * @extension {"x-faker": {"datatype.number": {"max": 10, "min": 0}}}
     */
    age: number;
    type: "mamal" | "reptile" | "bird" | "primate"
}