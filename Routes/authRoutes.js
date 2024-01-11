const {Hello} = require("../Controllers/createControllers.js");
const { readRandomOne,readByQuery, readByPagination } = require("../Controllers/readController.js");
const router = require("express").Router();

router.get("/", Hello);
router.get("/random",readRandomOne);
router.get("/read",readByQuery);
router.get("/paginated",readByPagination);

module.exports.routers = router;
