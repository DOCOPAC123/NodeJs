import express from "express";
import routes from "./src/routes/crmRoute";
import bodyParser from "body-parser";
import loginRoute from "./src/routes/loginRoute";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
routes(app);
loginRoute(app);

//Body parser setup

app.get('/', (req, res) => {
    res.send(`Hello world\n`);
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});