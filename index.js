const express = require("express");
const mongoose = require("mongoose");
const res = require("express/lib/response");

const app = express();

const Product = require("./product");
const socket = require("./socket");

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

const productData = [];

// mongodb+srv://oguzarslandas:<password>@oguzarslandas.tzv7tzz.mongodb.net/?retryWrites=true&w=majority

// connect to mongoose

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://oguzarslandas:Ma+380858@oguzarslandas.tzv7tzz.mongodb.net/flutter", (error) => {

    if (!error) {
        console.log("Connect to mongodb");

        // post api
        app.post("/api/add_product", async (req, res) => {

            console.log("Result", req.body);

            let data = Product(req.body);

            try {
                let dataToStore = await data.save();
                res.status(200).json(dataToStore);
            } catch (error) {
                res.status(400).json({
                    'status' : error.message    
                })
            }
        })

        // get api
        app.get("/api/get_product", async (req, res) => {

            try {
                let data = await Product.find();
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json(error.message)
            }
        })


        // post socket api
        app.post("/api/add_socket", async (req, res) => {

            console.log("Result", req.body);

            let data = socket(req.body);

            try {
                let dataToStore = await data.save();
                res.status(200).json(dataToStore);
            } catch (error) {
                res.status(400).json({
                    'status' : error.message    
                })
            }
        })

        // get socket api
        app.get("/api/get_socket", async (req, res) => {

            try {
                let data = await socket.find();
                res.status(200).json(data);
            } catch (error) {
                res.status(500).json(error.message)
            }
        })


    } else {
        console.log(error.message);
    }
})



// start server

app.listen(2000, () => {
    console.log("Connected to server at 2000");
})