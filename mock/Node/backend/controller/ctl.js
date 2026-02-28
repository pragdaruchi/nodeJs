const Schema =require("../schema/firstSchema")

module.exports.register = async(req,res)=>{
    console.log(req.body);

    let user = await Schema.findOne({email : req.body.email})

    if (user) {
        res.json({"msg" : "User All Rady Exits"})
    }

    
    
}