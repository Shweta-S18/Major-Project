const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const searchController = require("../controllers/search.js");

router.post("/search" , wrapAsync(searchController.searchBox));

router.get('/searchOptions', wrapAsync(searchController.filterOptions));
 module.exports = router;