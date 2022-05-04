const collegeModel = require("../model/collegeModel")


//===========================================1-Create Author Api====================================================//

const createCollegeData = async function (req, res) {

    try {
 
         let data = req.body
 
         if (!Object.keys(data).length) return res.status(400).send({ status: false, msg: "Please Provides the Details" })
 
         //-------------------------------------------check data validity-----------------------------------------------------//
         
         if (!data.name) return res.status(400).send({ status: false, msg: "name is Required" })
 
         if (!data.fullName) return res.status(400).send({ status: false, msg: "fullName is Required" })
 
         if (!data.name.match(/^[a-zA-Z]+$/)) return res.status(400).send({ status: false, msg: "invalid name" })
 
         if (!data.fullName.match(/^[a-zA-Z]+$/)) return res.status(400).send({ status: false, msg: "invalid fullName" })

         if (!data.logoLink.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)) return res.status(400).send({ status: false, msg: "invalid logoLink" });
         
         let openData= await collegeModel.find({ $and: [data, { isDeleted: false }]})

         if (openData.length==0) return res.status(404).send({ status: false, msg: "No such college name exists" })
 
 
         //--------------------------------------------create College Model-----------------------------------------------------//
         
         let saveData = await collegeModel.create(data)
 
         res.status(201).send({ status: true, msg:"College Model Created Sucessfully",data:saveData })
 
     }
     catch (err) {
 
         res.status(500).send({ error: err.message })
 
     }
 
 }

 module.exports={createCollegeData}