import foodModel from "../models/foodModel.js";
import fs from 'fs'

// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods }) 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    } 

}

// add food
const addFood = async (req, res) => {
 
    try {
        let image_filename = `${req.file.filename}`
        console.log(image_filename);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename,
            // image:'frontend//src//assets//food_16.png',
        }) 

        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error is there", error:error.message})
    }
}

// delete food
const removeFood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error); 
        res.json({ success: false, message: "Error" , error:error.message})
    }

}

export { listFood, addFood, removeFood }