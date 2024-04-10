const stdSchema = require("./model")

// AddData
const addData = async (req, res) => {
    try {
        const { name, email, mobile, city } = await req.body
        const data = await stdSchema.create({name,email,mobile,city})
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({"Error":"Data Not Added"})
    }
}

module.exports={addData}