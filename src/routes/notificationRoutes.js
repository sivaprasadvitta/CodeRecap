import express from 'express';
import { getRevisionNotifications } from '../controllers/notificationController.js';

const router = express.Router();

router.get('/revisions', getRevisionNotifications);

export default router;
