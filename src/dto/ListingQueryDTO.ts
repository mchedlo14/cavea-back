import {lariToTetri} from "../utils/currency";

export enum OrderBy {
    NAME = "name",
    PRICE = "price",
    LOCATION = "location"
}

export enum OrderingDirection {
    ASCENDING = "ASC",
    DESCENDING = "DESC"
}

export default class ListingQueryDTO {
    private _paginationLimit: number;
    private _paginationPage: number;
    private _orderBy: OrderBy;
    private _orderingDirection: OrderingDirection;
    private _location: string
    
    get paginationLimit(): number {
        return this._paginationLimit;
    }
    
    set paginationLimit(value: number) {
        this._paginationLimit = value;
    }
    
    get paginationPage(): number {
        return this._paginationPage;
    }
    
    set paginationPage(value: number) {
        this._paginationPage = value;
    }
    
    get orderBy(): OrderBy {
        return this._orderBy;
    }
    
    set orderBy(value: OrderBy) {
        this._orderBy = <OrderBy>value;
    }
    
    get orderingDirection(): OrderingDirection {
        return this._orderingDirection;
    }
    
    set orderingDirection(value: OrderingDirection) {
        this._orderingDirection = <OrderingDirection>value;
    }
    
    get location(): string {
        return this._location;
    }
    
    set location(value: string) {
        this._location = value.toLowerCase();
    }
}
