import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReservas} from '../controllers/ControladorReservas.js'

//Para poder llamar al controlador
//Debo crear un objeto de la clase controladorHabitacion
let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReservas();

export let rutas = express.Router()

//Atendiendo una petición y Respondiendo
rutas.post('/api/habitaciones', controladorHabitacion.registrarHabitacion)
rutas.get('/api/habitaciones/:id', controladorHabitacion.buscarHabitacionPorId)
rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitaciones)
rutas.put('/api/habitaciones/:id', controladorHabitacion.modificarHabitacion)
rutas.delete('/api/habitaciones/:id', controladorHabitacion.borrarHabitacion)

//Atendiendo una petición y Respondiendo Reservas
rutas.post('/api/reservas', controladorReserva.registrarReserva)
rutas.get('/api/reservas/:id', controladorReserva.buscarReservaPorId)
rutas.get('/api/reservas/', controladorReserva.buscarReservas)
rutas.put('/api/reservas/:id', controladorReserva.modificarReserva)
rutas.delete('/api/reservas/:id', controladorReserva.borrarReserva)