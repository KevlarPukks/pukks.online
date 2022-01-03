require("dotenv").config();

const express =require( "express");
const logger = require("morgan");

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const path = require("path");

const indexRoute = require("./routes");

const apiRoute = require("./routes/api");

const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cookieParser());

app.use('/',indexRoute)

app.use('/api',apiRoute)




app.listen(process.env.PORT)



