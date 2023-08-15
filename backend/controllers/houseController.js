
import House from '../models/houseModel.js';


const uploadHouse =  async (req, res) => {

   const housesImagePath = 'path', rentRequest = [{}], likes = [{}]
   console.log('dfdf')
    const {type, city, location, bedRooms, price, description, rentalPlan, story} = req.body

           const HouseCreate = await House.create({ type, city, location, bedRooms, price,housesImagePath, description, rentalPlan, likes, rentRequest, story});
           if(HouseCreate)
           {
              res.status(201).json({success:true, message:'House Uploaded Succesfully'})     
           }
           else{
              res.status(400)
              throw new Error('House Not Uploaded')
           }
          
              }

export {uploadHouse}
//removeHouse, removeHouses, updateHouseData, getHouses, likeHouse, rentRequest, acceptRequest, declineReques