import express from 'express';
import {
  activateMoreonus,
  archiveMoreonus,
  createMoreonus,
  deleteMoreonus,
  getactiveMoreonus,
  getAllMoreOnUs,
  getSpecificMoreonus,
  updateMoreonus,
} from '../controllers/moreonusController.js';
import checkMoreonus from '../middlewares/checkMoreonus.js';
import checkToken from '../middlewares/checkToken.js';

const router = express.Router();

router.post('/add', checkToken, checkMoreonus, createMoreonus);
router.get('', getAllMoreOnUs);
router.get('/active', getactiveMoreonus);
router.get('/:itemId', getSpecificMoreonus);
router.patch('/:itemId', checkToken, checkMoreonus, updateMoreonus);
router.delete('/:itemId', checkToken, deleteMoreonus);
router.patch('/activate/:itemId', checkToken, activateMoreonus);
router.patch('/archive/:itemId', checkToken, archiveMoreonus);

export default router;
