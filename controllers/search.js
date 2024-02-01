const Listing = require("../models/listing.js");

module.exports.searchBox = async(req, res) =>{
    let inpValue = req.body.searchInp; 
    const alllistings = await Listing.find({country: inpValue});
    res.render("./listings/place.ejs", {alllistings});
};

module.exports.filterOptions = async (req, res) => {
    const placeType = req.query.placeType;
    try {
      const alllistings = await Listing.find({ placeType: placeType });
      if(!alllistings){
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
      }else{
        res.render("./listings/place.ejs", {alllistings});
      }  
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };