const {Hello, createEntry} = require("../Controllers/createControllers.js");

const { readRandomOne,readByQuery, readByPagination } = require("../Controllers/readController.js");

const {updateEntry} = require("../Controllers/updateControllers.js");
const router = require("express").Router();

router.get("/", Hello);
router.get("/random",readRandomOne);
router.get("/read",readByQuery);
router.get("/paginated",readByPagination);


router.post("/create", createEntry)

router.patch("/update",updateEntry);

module.exports.routers = router;
