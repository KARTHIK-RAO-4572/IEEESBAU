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
  //GET GRSS
const getGRSS = function(req,res){
    res.status(200);
    res.render("GRSS.ejs");
  }
    //GET ITS
const getITS = function(req,res){
    res.status(200);
    res.render("ITS.ejs");
  }
//GET CS
const getCS = function(req,res){
  res.status(200);
  res.render("CS.ejs");
}
//GET CS
const getPES = function(req,res){
  res.status(200);
  res.render("PES.ejs");
}
//GET CAS
const getCAS = function(req,res){
  res.status(200);
  res.render("CAS.ejs");
}
//GET RA 
const getRANANO = function(req,res){
  res.status(200);
  res.render("index.jade",{title:"Data Not Submitted"});
}
//GET 
const getMembers2023 = function(req,res){
  res.status(200);
  res.render("index.jade",{title:"Work Under Progress"});
}
//GET 
const getEvents2023 = function(req,res){
  res.status(200);
  res.render("index.jade",{title:"Work Under Progress"});
}
//GET 
const getContact = function(req,res){
  res.status(200);
  res.render("index.jade",{title:"Work Under Progress"});
}
module.exports = {
    getSB,
    getCIS,
    getGRSS,
    getITS,
    getPES,
    getCS,
    getCAS,
    getRANANO,
    getMembers2023,
    getEvents2023,
    getContact
};