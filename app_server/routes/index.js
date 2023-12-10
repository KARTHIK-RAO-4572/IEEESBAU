
var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer()
const ctrls = require('../controllers/main');
//GET SB Page
router.get('/',ctrls.getSB);
//GET CS
// router.get('/chapters/CS',ctrls.getCS);
//GET CAS
// router.get('/chapters/CAS',ctrls.getCAS);
//GET CIS
router.get('/chapters/CIS',ctrls.getCIS);
//GET GRSS
router.get('/chapters/GRSS',ctrls.getGRSS);
//GET PES
// router.get('/chapters/PES',ctrls.getPES);
//GET ITS
// router.get('/chapters/ITS',ctrls.getITS);
//GET RA-NANO
// router.get('/chapters/RA-NANO',ctrls.getRANANO);
//GET Members
// router.get('/chapters/members-2023',ctrls.getMembers2023);
//GET Events
// router.get('/chapters/events-2023',ctrls.getEvents2023);
//GET Contact
// router.get('/chapters/contact',ctrls.getContact);

module.exports = router;
