const {Hello} = require("../Controllers/createControllers.js")
const router = require("express").Router();

router.get("/", Hello);


module.exports.routers = router;
