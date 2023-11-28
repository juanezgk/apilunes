import { modelohabitacion } from "../models/ModeloHabitacion.js";
import { ServicioReserva } from "../services/ServicioReservas.js";
import mongoose from "mongoose";

export class ControladorReservas{

    constructor(){}
    async registrarReserva(peticion,respuesta){
        try{
            let servicioReserva=new ServicioReserva()
            //1.Esculcar los datos que quieren usar para el registro
            let datosReservasRegistrar=peticion.body
            let habitacionId = datosReservasRegistrar.habitacionID
            //2.Validars los datos
            let habitacionExistente = await modelohabitacion.findById(habitacionId);

            if (!habitacionExistente) {
                return respuesta.status(400).json({ mensaje: "La habitación especificada no existe" });
            } else{
                datosReservasRegistrar.habitacionID=habitacionExistente
                //3.Intentar guardar los datos
                await servicioReserva.registrarReserva(datosReservasRegistrar)
                //4.Responder
                respuesta.status(200).json({
                    "mensaje":"Exito en la operacion de guardado",
                    "datos":datosReservasRegistrar
                })
            }            
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"Fallamos en la operacion de registro"
            })      
        }
    }
    async buscarReservas(peticion,respuesta){
                try{
                    let servicioReserva=new ServicioReserva()
                    //1.Intentar buscar los datos en BD
                    //2.Responder
                    respuesta.status(200).json({
                        "mensaje":"exito en la operacion de busqueda",
                        "datos": await servicioReserva.buscarReservas()
                    })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la opreacion de busqueda"
            })
        }
    }
    async buscarReservaPorId(peticion, respuesta) {
        try {
            let servicioReserva = new ServicioReserva();
            // 1. Esculcar los parametros de la peticion
            let idReservaBuscar = peticion.params.id;
            // 2. Validar el dato que llegó
            if (!mongoose.Types.ObjectId.isValid(idReservaBuscar)) {
                return respuesta.status(400).json({
                    mensaje: "El ID de reserva no es válido"
                });
            }
            // 3. Intento buscar el dato en BD
            let reservaEncontrada = await servicioReserva.buscarReservaPorId(idReservaBuscar);
            // 4. Responder
            if (reservaEncontrada) {
                respuesta.status(200).json({
                    "mensaje": "Éxito en la operación de búsqueda",
                    "datos": reservaEncontrada
                });
            } else {
                respuesta.status(404).json({
                    "mensaje": "Reserva no encontrada"
                });
            }
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Fallamos en la operación de búsqueda" + error
            });
        }
    }
    

    async modificarReserva(peticion,respuesta){
        try{
            let servicioReserva=new ServicioReserva()
            //1.Traigo el id a editar de la peticion
            let idReservaModificar=peticion.params.id
            let datosReservaModificar=peticion.body
            //2.Validar los datos
            //3.Intentar buscar y modifica en DB
            await servicioReserva.modificarReserva(idReservaModificar, datosHabitacionModificar)
            //4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos": datosReservaModificar
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la opreacion de edicion "+ error
            })
        }
    }
    async borrarReserva(peticion,respuesta){
        try{
            let servicioReserva=new ServicioReserva()
            //1.Esculcar el id a borra de la peticion
            let idReservaEliminar=peticion.params.id
            //2.Validar los datos
            await servicioReserva.borrarReserva(idReservaEliminar)
            //3.Intentar borrar la habitacion
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de Borrado"
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de borrado"+ error
            })
        }
    }
}