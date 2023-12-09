import mongoose from 'mongoose'
 
const url ="mongodb://localhost:27017"
export const mongoConection= async () =>{
    try {
        const conn= await mongoose.connect(url)
        return conn
    } catch (error) {
        console.error(error);
        
        
    }
     

}










/*const RegisterSchema = new  mongoose.Schema({
    nombre: {
        type: String
    },
    apellido:{
        type: String
    }

})*/