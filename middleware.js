const Handledata = require("./mongodb");

const middleware= async(req, res, next)=>{
    const user=String(req.body.data.four);
    try{
     const value = await Handledata.findOne({user_id:user});
     await res.cookie("ByAbhishekKumarSingh",value.name,{expires: new Date(Date.now()+400000000000),httpOnly:false});
     next();
    }
    catch (error) {
     res.status(400).send(error);
   }
}

module.exports = middleware;