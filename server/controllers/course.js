const Course = require('../models/courseSchema')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
   var upload = multer({ storage: storage })
 
exports.add_Course = async (req,res) => 
{ 
try {
   
    const {Title,Description,Content,Categorie} = req.body;
    let MyCourse= JSON.parse(req.body);
/*     let path =`${req.protocol}://${req.hostname}:7000/uploads/${req.file.filename}`;
 */
upload.single('avatar')
let path =req.protocol+'://'+req.hostname+':'+7000+'/uploads/'+req.file.filename;
    const newCourse=new Course({...MyCourse,categorie:Categorie,owner:req.userId,avatar:path})

/*     const newCourse=new Course({Title,Description,Content,owner:req.userId,avatar:path})
 */    
//const newCourse=new Course({...req.body,owner:req.userId,avatar:path})

const course=await newCourse.save()
res.status(200).json(course)
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
}
exports.get_Course=async (req,res)=>
{
    try {
        const courses = await Course.find({}).populate('owner', '-password -__v').select('-__v');
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).json({message:`no Courses:${error}`})
    }
    
}
 exports.delete_Course = async (req,res)=>
{
    try {
        const courses = await Course.findByIdAndDelete({_id: req.params.id});
        /*res.status(200).json(courses)*/
        res.json({ msg: "courses was deleted" });
    } catch (error) {
        res.status(500).json({message:`no Course deleted:${error}`})
    }
    
}