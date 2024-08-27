const multer= require('multer')

const storage=multer.diskStorage({
    destination: function(req,file,ch){
        combineTableNames(null,'./storage')
    }
})

module.exports={multer,storage}