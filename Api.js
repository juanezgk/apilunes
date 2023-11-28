import express from 'express'
import cors from 'cors'

import {rutas} from './routes/rutas.js'
import { establecerConexion } from './database/conexion.js'

//Creacion de una Clase
export class Api{
    constructor(){
        this.app = express()
        this.conectarBD()
        this.procesarPeticiones()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log("Servidor operando con exito")
        })
    }
    procesarPeticiones(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use('/',rutas)
        
    }
    conectarBD(){
        establecerConexion()
    }
}