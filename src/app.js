import  express from 'express'
import morgan from "morgan";
import cors from "cors";
import notFound from './middleware/notFound.js';

import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/product.routes.js"

const app = express();
app.use(morgan("dev"));
app.use(cors());//Permite usar los encabezados para transmision de datos por medio de http por medio de los navegadores
app.use(express.json());

//Manejo de 404 route not Found



/* Routes */
app.use("/", indexRoutes);
app.use("/api",productsRoutes);




app.use(notFound);
export default app;