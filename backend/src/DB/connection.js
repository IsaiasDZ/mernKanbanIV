const mongoose = require("mongoose");
const DB = process.env.URL;

if (!DB)
{
    console.error(`MongoDB URL is not defined. Set URL environment varible`);
}

mongoose.connect(DB)
    .then(() => {
        console.log("Conexion Exitosa...");
    })
    .catch((error) =>{
        console.log("Conexion Fallida...")
        process.exit(1);
    })
 