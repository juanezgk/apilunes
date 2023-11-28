import mongoose from "mongoose"
import { modelohabitacion } from "../models/ModeloHabitacion.js"

export class ServicioHabitacion{
    constructor(){}

    async registrarHabitacion(datos){
        let habitacionNueva = new modelohabitacion(datos)
        return await habitacionNueva.save()
    }
    async buscarHabitaciones(){
        let habitaciones = await modelohabitacion.find()
        return habitaciones
    }
    async buscarHabitacion(id){
        let habitacion=await modelohabitacion.findById(id)
        return habitacion
    }
    async modificarHabitacion(id, datos){
        return await modelohabitacion.findByIdAndUpdate(id, datos)
    }
    // En la clase ServicioHabitacion

    async borrarHabitacion(id) {

        // Validar el id
        if(!mongoose.Types.ObjectId.isValid(id)) { 
            throw new Error('Id de habitación no válido');        
        }  
        // Encontrar habitación por id y eliminar
        const resultado = await modelohabitacion.findByIdAndDelete(id);        
        // Verificar si se eliminó la habitación
        /*if(!resultado) {
            throw new Error('Habitación no encontrada');
        }*/
    
        return true; 
    }
    
}