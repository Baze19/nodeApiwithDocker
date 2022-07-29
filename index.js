import express  from "express";
const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.json([{
        name: 'Abiodun',
        age:"400 yrs",
        accountBalance:"1milliondollars"
    }])
});

app.listen(port, () => console.log('listening on port ' + port));