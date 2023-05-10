import {Service} from 'typedi';
import InventoryRepository from '../repositories/InventoryRepository';
import InventoryDTO from "../dto/InventoryDTO";

@Service()
export default class InventoryService {
    constructor(public inventoryRepository: InventoryRepository) {
    }
    
    addInventory = async (inventoryDTO: InventoryDTO) => {
        return await this.inventoryRepository.addInventory(inventoryDTO);
    };
    
    listInventories = async () => {
        return await this.inventoryRepository.listInventories();
    };
}
