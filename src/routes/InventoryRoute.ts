import express from 'express';
import {InventoryRequest} from '../requests/InventoryRequest';
import RequestValidator from '../middlewares/RequestValidator';
import {Container} from 'typedi';
import InventoryController from '../controllers/InventoryController';

export const router = express.Router();

const inventoryRoute = Container.get(InventoryController);

router.post('/inventories', RequestValidator.validate(InventoryRequest), inventoryRoute.addInventory);
router.get('/inventories', inventoryRoute.listInventories);

export default router;