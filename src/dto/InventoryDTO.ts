import {lariToTetri} from "../utils/currency";

const GEO_TETRI_QUANTITY_IN_GEO_LARI = 100;

export default class InventoryDTO {
    private _name: string;
    
    private _location: string;
    
    private _price: number;
    
    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }
    
    get location(): string {
        return this._location;
    }
    
    set location(value: string) {
        this._location = value;
    }
    
    get price(): number {
        return this._price;
    }
    
    set price(value: number) {
        this._price = lariToTetri(value);
    }
}
