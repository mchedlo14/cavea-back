import InventoryService from '../services/InventoryService';
import {asyncWrapper} from '../utils/asyncWrapper';
import {SuccessResponse} from '../utils/SuccessResponse';
import {Service} from 'typedi';
import {Request} from "express";
import InventoryDTO from "../dto/InventoryDTO";

@Service()
export default class InventoryController {
    constructor(public inventoryService: InventoryService) {
    }

    addInventory = asyncWrapper(async (req: Request) => {
        const inventoryDTO = new InventoryDTO()
        inventoryDTO.name = req.body.name
        inventoryDTO.location = req.body.location
        inventoryDTO.price = req.body.price

        const inventory = await this.inventoryService.addInventory(inventoryDTO)
        return new SuccessResponse(inventory)
    })

    listInventories = asyncWrapper(async () => {
        const response = await this.inventoryService.listInventories();
        return new SuccessResponse(response);
    });
}
