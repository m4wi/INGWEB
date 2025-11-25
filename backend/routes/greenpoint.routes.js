import { Router } from 'express';
import { GreenPointController } from '../controllers/greenpoint.controller.js'

const router = Router();


router.get('/', GreenPointController.getAllGreenPoints )
router.get('/:id', GreenPointController.getGreenPoint)
router.post('/', GreenPointController.createGreenPoint )
router.delete('/:id', GreenPointController.deleteGreenPoint)

router.get('/findCategory/:categoryId', GreenPointController.findGreenPointsByCategory)
router.get('/nearby', GreenPointController.findGreenPointsByLocation)


export default router;