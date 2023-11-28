import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Reservas = new Schema({
    fechaEntrada: {
        type: Date,
        required:true
    },
    fechaSalida: {
        type: Date,
        required:true
    },
    costo:{
        type: Number,
        required:true
    },
    numeroHuespedes:{
        type : Number ,
        required:true
    },
    nombreReserva:{
        type : String ,
        required:true
    },
    habitacionID:{
        type : Schema.Types.ObjectId,
        ref: 'habitaciones' //
    }
}) 

export const modeloreserva=mongoose.model('reserva',Reservas)