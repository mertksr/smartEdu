import express from "express";
import ejs from "ejs";
import pageRoute from "./routes/pageRoute.js";
const app = express();


app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', pageRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})