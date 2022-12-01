export interface PaginatedData<T> {
    /**
     * @minLength 1
     * @isInt
     * @extension {"x-faker": {"datatype.number": {"max": 10, "min": 0}}}
     */
    page: number;
    /**
     * @isInt
     * @extension {"x-faker": {"datatype.number": {"max": 100, "min": 0}}}
     */
    totalElements: number;
    /**
     * @isInt
     * @extension {"x-faker": {"datatype.number": {"max": 10, "min": 0}}}
     */
    size: number;
    elements: T[]
}