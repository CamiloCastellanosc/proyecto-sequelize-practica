const { Router } = require("express");
const router = Router();
const crearCompany = require("../controllers/company.controller")





router.post("/company", crearCompany);


module.exports = router;