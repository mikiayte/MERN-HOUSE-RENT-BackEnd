import multer from 'multer';

var imageArray = [], imageLocation;
 
const storageEngine = multer.diskStorage({
    destination: "backend/images",
    filename: (req, file, cb) => {
    var fileName = `${Date.now()}${file.originalname}`;
    imageLocation = "http://localhost:5000/images/"+ fileName ;
    imageArray.push(imageLocation)
  
      cb(null, fileName);
    },
  });
import path from 'path'

const checkFileType = function (file, cb) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

  const upload =  multer({
      storage: storageEngine,
      fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
      },
    });

    const emptyArray = () => {
      imageArray = []
      console.log('array Empted', imageArray)
     }
     const returnImageArray = () => {
      console.log('inside retur image Array', imageArray)

      return imageArray;
     }

export { upload , emptyArray, returnImageArray
}
