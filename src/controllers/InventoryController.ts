import {Request} from "express";
import {Service} from 'typedi';
import InventoryDTO from "../dto/InventoryDTO";
import ListingQueryDTO, {OrderBy, OrderingDirection} from "../dto/ListingQueryDTO";
import InventoryService from '../services/InventoryService';
import {asyncWrapper} from '../utils/asyncWrapper';
import {SuccessResponse} from '../utils/SuccessResponse';

@Service()
export default class InventoryController {
    constructor(public inventoryService: InventoryService) {
    }
    
    addInventory = asyncWrapper(async (req: Request) => {
        const inventoryDTO = new InventoryDTO();
        inventoryDTO.name = req.body.name;
        inventoryDTO.location = req.body.location;
        inventoryDTO.price = req.body.price;
        
        const inventory = await this.inventoryService.addInventory(inventoryDTO);
        return new SuccessResponse(inventory);
    });
    
    listInventories = asyncWrapper(async (req: Request) => {
        const listingQueryDTO = new ListingQueryDTO();
        listingQueryDTO.paginationPage = parseInt(<string>req.query.page);
        listingQueryDTO.paginationLimit = parseInt(<string>req.query.limit);
        listingQueryDTO.orderingDirection = <OrderingDirection>req.query.ordering_direction;
        listingQueryDTO.location = <string>req.query.location;
        
        listingQueryDTO.orderBy = (req.query.order_by === "") ? OrderBy.NAME : <OrderBy>req.query.order_by;
    
        const response = await this.inventoryService.listInventories(listingQueryDTO);
        return new SuccessResponse(response);
    });
}
