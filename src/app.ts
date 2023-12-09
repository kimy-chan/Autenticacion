import express, { Application } from "express";
import registerRouter from './router/register'
import { mongoConection}from './config/conecction.db'
export class Server{
    app:Application= express()
    port:number

    constructor(){
        this.port= 4000
        this.router()

    }

    router(){
        this.app.use(registerRouter)

    }


    initServer(){
        this.app.listen(this.port,async ()=>{
         await mongoConection()
            console.log("servidor corriendo", this.port)
        })

    }

}