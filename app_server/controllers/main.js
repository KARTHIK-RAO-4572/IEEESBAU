//GET SB
const getSB = function(req,res){
    res.status(200);
    res.render("SB.ejs");
  }

//GET CIS
const getCIS = function(req,res){
    res.status(200);
    res.render("CIS.ejs");
  }
  //GET CIS
const getGRSS = function(req,res){
    res.status(200);
    res.render("GRSS.ejs");
  }
module.exports = {
    getSB,
    getCIS,
    getGRSS
};