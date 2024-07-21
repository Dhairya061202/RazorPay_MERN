import express from 'express';
import { checkout, paymentVerfication } from '../controllers/payment.js';

const router = express.Router();

router.route("/checkout").post(checkout)
router.route("/paymentverfication").post(paymentVerfication)



export default router;