import express from 'express';
import hallRouter from './Router/hallBooking.router.js'

const app = express();
const PORT = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`<div style="text-align: center; background-color:green;  padding: 10px;"><h1> NodeJS Hall Booking API</h1></div>`)
});

app.use('/hallapi',hallRouter)

app.listen(PORT, () => {
    console.log("App is running the PORT",PORT);
})