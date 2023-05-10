import {Service} from 'typedi';
import ListingQueryDTO from '../dto/ListingQueryDTO';
import InventoryRepository from '../repositories/InventoryRepository';
import InventoryDTO from '../dto/InventoryDTO';

@Service()
export default class InventoryService {
    constructor(public inventoryRepository: InventoryRepository) {
    }
    
    addInventory = async (inventoryDTO: InventoryDTO) => {
        return await this.inventoryRepository.addInventory(inventoryDTO);
    };
    
    listInventories = async (listingQueryDTO: ListingQueryDTO) => {
        return await this.inventoryRepository.listInventories(listingQueryDTO);
    };
    
    deleteInventory = async (id: number) => {
        return await this.inventoryRepository.deleteInventory(id);
    };
}
