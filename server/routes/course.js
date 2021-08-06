const express = require('express')
const router = express.Router();

const{ add_Course,get_Course, delete_Course }=require('../controllers/course');
const { authMiddleware } = require('../middleware/userAuth');
/* const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
 */
router.post('/newcourse',authMiddleware,add_Course)
router.get('/',get_Course)
router.delete('/deletecourse/:id',delete_Course)


module.exports = router;

