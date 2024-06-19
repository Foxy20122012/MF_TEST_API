import  express from 'express'
import morgan from "morgan";
import cors from "cors";
import notFound from './middleware/notFound.js';

import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/product.routes.js"
import categoriesRoutes from './routes/categories.routes.js'
import employeesRoutes from './routes/employees.routes.js'
import customersRoutes from './routes/customers.routes.js'
import inventayRoutes from './routes/inventory.routes.js'
import productsDetailsRoutes from './routes/productsDetails.routes.js'


const app = express();
app.use(morgan("dev"));
app.use(cors());//Permite usar los encabezados para transmision de datos por medio de http por medio de los navegadores
app.use(express.json());

//Manejo de 404 route not Found



/* Routes */
app.use("/", indexRoutes);
app.use("/api",productsRoutes);
app.use("/api",categoriesRoutes);
app.use("/api", employeesRoutes);
app.use("/api", customersRoutes)
app.use("/api", inventayRoutes)
app.use("/api",  productsDetailsRoutes)

app.use(notFound);

export default app;