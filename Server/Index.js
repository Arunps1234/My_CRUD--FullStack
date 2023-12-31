const express = require("express");
const app = express();
require("./Database/Connection")
const saveUser = require("./Database/Savedcontact.js")
const users = require("./Database/Schema")
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.listen(4000, function () {
    console.log("App is runnning at port:5000")

})

app.post("/create", async (req, res) => {

    const { firstname, lastname, email, phone, gender } = req.body

    if (!firstname || !lastname || !email || !phone || !gender)

        return res.json("All fields are mandatory")

    else {

        const createUser = await users.create({
            firstname, lastname, email, phone, gender
        })

        res.send("User created successfully")
    }
})

app.get("/Allusers", async (req, res) => {
    const getUser = await users.find({});
    res.send(getUser)
})

app.delete("/delete/:id", async (req, res) => {
    const ids = req.params.id;

    const deleteUser = await users.findOneAndDelete({ _id: ids });
    if (deleteUser) {
        res.send("User deleted successfully!")
    }
    else {
        res.send("Failed to delete the user")
    }
})

//single user
app.get("/user/:id", async (req, res) => {
    const ids = req.params.id;

    const user = await users.findOne({ _id: ids });

    res.send(user)
})

// updat User
app.put("/update/:id", async (req, res) => {
    const ids = req.params.id;
    const { firstname, lastname, email, phone, gender } = req.body

    const updatUser = await users.findOneAndUpdate({ _id: ids }, { firstname, lastname, email, phone, gender })
    if (updatUser) {
        res.send("User details Update successfully!")
    }
    else {
        res.send("Failed to update user details")
    }
})

///Save contcts

app.post("/saveContacts", async (req, res) => {
    const { firstname, lastname, email, phone, gender } = req.body


    const savedUser = await saveUser.create({
        firstname, lastname, email, phone, gender
    });
    if (savedUser) {
        res.send("User contact saved successfully!")
    }
    else {
        res.send("Failed to save contacts")
    }
})


//get all saved contacts

app.get("/Allsavedcontcts", async (req, res) => {
    const getUsers = await saveUser.find({});

    res.send(getUsers)

})

// delete saveduser

app.delete("/deletesaveduser/:id", async (req, res)=>{
const ids = req.params.id;

const deleteuser = await saveUser.findOneAndDelete({_id:ids});

if(deleteuser){
    res.send("User deleted successfully")
}

else{
    res.send("Failed to delete user")
}
})