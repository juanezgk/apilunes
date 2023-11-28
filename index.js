import {Api} from './Api.js'
import 'dotenv/config'

console.log(process.env)

//Para usar una clase debo crear un objeto
//para usar una clase se debe crear una instancia
//Todo Objeto es una variable
let servidor = new Api()
//Levantar o Despertar el servidor
servidor.levantarServidor()

