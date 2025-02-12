import foodModel from "../models/foodModal.js";
import fs from 'fs'


// add food item    

const addFood = async (req, res) => {

    let image_filename = req.file ? `${req.file.filename}` : '';

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}


//All Food List

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}


// Remove food item

const removeFood = async (req, res) => {
    try {
        const foods = await foodModel.findById(req.body.id);
        if (!foods) {
            return res.json({ success: false, message: "Food not found" });
        }
        fs.unlink(`uploads/${foods.image}`, (err) => {
            if (err) {
                console.error("Error deleting image:", err);
            }
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.error("Error:", error);
        res.json({ success: false, message: "Error" });
    }
}





export { addFood, listFood, removeFood }