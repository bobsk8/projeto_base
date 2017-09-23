let
    express             = require('express'),
    bodyParser          = require('body-parser'),
    cors                = require('cors'),
    config              = require('config');
    app                 = express(),
    routerAdapter       = require('./routes'),
    server              = require('./dao/index'),


app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
  }));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
server(config);
routerAdapter(app);
app.get('*', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
app.listen(80);