import {Op} from "sequelize";
import ListingQueryDTO from "../dto/ListingQueryDTO";
import {Inventory} from '../models/Inventory';
import {Service} from 'typedi';
import InventoryDTO from "../dto/InventoryDTO";

@Service()
export default class InventoryRepository {
    
    addInventory = async (inventoryDTO: InventoryDTO): Promise<Inventory> => {
        const name = inventoryDTO.name.toLowerCase();
        const location = inventoryDTO.location.toLowerCase();
        const price = inventoryDTO.price;
        
        const inventory = Inventory.build({name, location, price});
        return await inventory.save();
    };
    
    listInventories = async (listingQueryDTO: ListingQueryDTO): Promise<Inventory[]> => {
        const listingOffset = listingQueryDTO.paginationLimit * listingQueryDTO.paginationPage;
        let location = "%";
        if (listingQueryDTO.location !== "") {
            location = listingQueryDTO.location;
        }
        
        const result = Inventory.findAll({
            order: [
                [listingQueryDTO.orderBy, listingQueryDTO.orderingDirection]
            ],
            offset: listingOffset,
            limit: listingQueryDTO.paginationLimit,
            where: {
                location: {
                    [Op.like]: location
                }
            }
        });
        
        return await result;
    };
}
