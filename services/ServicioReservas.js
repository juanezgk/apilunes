import mongoose from "mongoose";
import { modeloreserva } from "../models/ModeloReservas.js"

export class ServicioReserva {
    constructor() {}

    async registrarReserva(idReserva){
        let reservaNueva = new modeloreserva(idReserva);
        return await reservaNueva.save();
    }
    async buscarReservas(){
        let reservas=await modeloreserva.find();
        return reservas
    }
    async buscarReservaPorId(id){
        let reserva=await modeloreserva.findById(id);
        return reserva
    }
    async modificarReserva(id, datos){
        return await modeloreserva.findByIdAndUpdate(id, datos)
    }
    
    async borrarReserva(id){
        //Validar el id
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("El Id no es valido");
        }
        // Encontrar habitación por id y eliminar
        const resultado = await modeloreserva.findByIdAndRemove(id);
        // Verificar si se eliminó la habitación
        if(!resultado){
            throw new Error("Reserva no encontrada")
        }

        return true;
    }
}