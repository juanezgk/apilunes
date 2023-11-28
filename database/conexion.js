import mongoose from "mongoose";
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log("Exito en la Conexion")
    }catch(error){
        console.log("Fallamos Conectandonos" + error)        
    }
}