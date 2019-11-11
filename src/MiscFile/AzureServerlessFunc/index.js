const createHandler = require('azure-function-express').createHandler;
const app = require('express')();
//alert('hi');

app.get("/api/AzFuncExp/home", (req, res) => {
    res.json({ "name": "Home", "dob": "ddmmyyyy" });
});

app.get("/api/AzFuncExp/work", (req, res) => {
    res.json({ "name": req.query.name, "dob": "ddmmyyyy" });
});

module.exports = createHandler(app);