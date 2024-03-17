import express from 'express';
import hallRouter from './Router/hallBooking.router.js'

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Nodejs Hall Booking API")
});

app.use('/hallapi',hallRouter)

app.listen(PORT, () => {
    console.log("App is running the PORT",PORT);
})