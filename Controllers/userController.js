const User = require("../Models/userModel");
const RandomWord = require("random-words");


const postUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    user.save();
    return res.send({ user, message: "User Added" });
  } catch (error) {
    console.log(error.message);
  }
};

const getUser = async(req,res)=>{
  try{
      const user = await User.find({});
      return res.status(200).send(user);
  }
  catch(err){
      console.log(err);
  }
};

const randomApi = async(req,res)=>{
  try{
    const randomWord = await RandomWord({ min: 20, max: 45 }).join(" ");
    return res.status(200).send(randomWord);
  }
  catch(err){
    res.status.send("msg",err)
  }
 
};

const updateScore = async(req,res)=>{
  const { id } = req.params;
  const {score } = req.body;
    try {
      const updatedScore = await User.updateOne({ _id: id },{ $set: { score }});
     return  res.send({ updatedScore });
    } catch (err) {
      res.send(err);
    }
  
}


module.exports = { postUser,randomApi,getUser,updateScore};