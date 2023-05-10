import {Inventory} from '../models/Inventory';
import {Service} from 'typedi';
import InventoryDTO from "../dto/InventoryDTO";

@Service()
export default class InventoryRepository {

    addInventory = async (inventoryDTO: InventoryDTO): Promise<Inventory> => {
        const name = inventoryDTO.name
        const location = inventoryDTO.location
        const price = inventoryDTO.price

        const inventory = Inventory.build({name, location, price});
        return await inventory.save()
    }

    listInventories = async (): Promise<Inventory[]> => {
        return await Inventory.findAll();
    };
}
