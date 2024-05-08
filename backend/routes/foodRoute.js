import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';//luu tru hinh anh

const foodRouter = express.Router();
//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
        //1 ten duy nhat cho anh 
    }

})

const upload = multer({storage})
//noi luu tru 


foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)





export default foodRouter;

