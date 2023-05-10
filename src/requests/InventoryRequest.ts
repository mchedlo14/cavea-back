import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class InventoryRequest {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    location: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}
