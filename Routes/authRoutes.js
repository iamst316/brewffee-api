const {Hello, createEntry} = require("../Controllers/createControllers.js");
const { deleteEntry } = require("../Controllers/deleteControllers.js");

const { readRandomOne,readByQuery, readByPagination } = require("../Controllers/readController.js");

const {updateEntry} = require("../Controllers/updateControllers.js");
const router = require("express").Router();

router.get("/", Hello);
router.get("/random",readRandomOne);
router.get("/read",readByQuery);
router.get("/paginated",readByPagination);


router.post("/create", createEntry)

router.patch("/update",updateEntry);

router.delete("/delete", deleteEntry);

module.exports.routers = router;
