import express from 'express';
import inventoryRoute from './InventoryRoute';

const router = express.Router();

const allRoutes = [
    {
        path: '/inventory-management',
        route: inventoryRoute,
    },
];

allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
