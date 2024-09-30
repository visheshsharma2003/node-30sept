const mongoose=require('mongoose');
async function connection(){
    try{
        await mongoose.connect('mongodb://localhost:27017/batch3-30sept')
        console.log("database connected.......")

    }
    catch(err){
        console.log(err);
    }
}
module.exports=connection;