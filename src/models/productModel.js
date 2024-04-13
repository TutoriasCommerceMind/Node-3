const mongoose= require("mongoose") //Importamos MONGOOSE para interactuar con nuestra DB de Mongo

// Definir el esquema a utilizar

const productSchema = new mongoose.Schema({
    name:String,  //Campo para el nombre del producto que va a ser tipo STRING
    price:Number, //Campo para el precio del producto que va a ser tipo NUMBER
    description:String //Campo para la descripcion del producto que va a ser tipo STRING
})

// Creamos el modelo de Producto utilizando el esquema anterior
const Product= mongoose.model("Product",productSchema)

// Exportamos
module.exports = Product

