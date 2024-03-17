import express from 'express';
import { AllCustomersBookedData, BookRoom, BookedRoomData, CreateNewRoom, CustomerBookingDetails, getHallDetail } from '../Controllers/hallBooking.controller.js';

const router = express.Router()

router.get('/halldetails', getHallDetail);
router.post('/createnewroom', CreateNewRoom);
router.post("/bookroom", BookRoom);
router.get("/bookedroomdata", BookedRoomData);
router.get("/customersbookeddata", AllCustomersBookedData);
router.get("/customerbookingcount", CustomerBookingDetails);



export default router;