const express = require('express');
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { expressjwt: exjwt } = require('express-jwt');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const myFuel = require('./FuelPrice');
const FuelPrices = require('./FuelPrice');
app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb://127.0.0.1:27017/CleanEnergy", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;

const secretKey = 'My Secret Key';
const jwtMW = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

let users = [
    {
        id: 1,
        username: 'Shiva',
        password: '007'
    },
    {
        id: 2,
        username: 'Chakali',
        password: '1234'
    },
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Received username:', username);
    console.log('Received password:', password);

    // Find the user based on the username
    const user = users.find(u => u.username === username);

    if (!user) {
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or password is incorrect'
        });
        return;
    }

    if (password === user.password) {
        let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '3m' });
        res.json({
            success: true,
            err: null,
            token
        });
    } else {
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or password is incorrect'
        });
    }
});

app.get('/api/dashboard', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Secret content that only logged-in people can see'
    });
});

app.get('/api/prices', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Secret content that only logged-in people can see'
    });
});

app.get('/hello',(req,res) =>{
    res.send("Hello World!");
});

app.get('/api/summary-chart', (req, res) => {
    res.json([
        { name: 'Jan', EV_Adoption: 40 },
        { name: 'Feb', EV_Adoption: 50 },
        { name: 'Mar', EV_Adoption: 65 },
        { name: 'Apr', EV_Adoption: 70 },
        { name: 'May', EV_Adoption: 80 }
    ]);
});

app.get('/api/report-chart', (req, res) => {
    res.json([
        { month: 'Jan', price: 3.5 },
        { month: 'Feb', price: 3.7 },
        { month: 'Mar', price: 3.9 },
        { month: 'Apr', price: 4.1 },
        { month: 'May', price: 4.3 }
    ]);
});


app.get("/fuel", async (req, res) => {
    try {
        const { year, month } = req.query;

        const query = {};
        if (year) query.year = new Date(year); // Expects full ISO or YYYY format
        if (month) query.month = parseInt(month);

        const fuelItems = await FuelPrices.find(query);
        return res.status(200).json(fuelItems);
    } catch (err) {
        console.error("Error fetching fuel data:", err);
        res.status(500).json({ error: "Server error" });
    }
});


// app.post("/fuel", async (req, res) => {
//     try {
//         const { myFuel } = req.body;

//         if (!Array.isArray(myFuel)) {
//             return res.status(400).json({ error: "Invalid format" });
//         }

//         const newFuelitems = myFuel.map(item => {
//             if (!item.title || !item.budget || !item.color) {
//                 throw new Error("All fields are required for each entry.");
//             }
//             return { title: item.title, value: item.budget, color: item.color };
//         });

//         // Insert multiple documents at once
//         const insertedBudgets = await Budget.insertMany(newBudgets);
//         res.status(201).json(insertedBudgets);
//     } catch (err) {
//         console.error("Error adding budget data:", err);
//         res.status(400).json({ error: err.message });
//     }
// });

app.get('/api/settings', jwtMW, (req, res) => {
    res.json({
        success: true,
        myContent: 'Settings: Change your preferences here.'
    });
});


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            officialError: err,
            err: 'Username or password is incorrect'
        });
    } else {
        next(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});