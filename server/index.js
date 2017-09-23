let
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('config'),
    session = require('express-session'),
    cookieParser = require('cookie-parser')
    app = express(),
    routerAdapter = require('./routes'),
    server = require('./dao/index');

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

//config for production
if (process.env.NODE_ENV != 'dev') {
    let redisStore = require('connect-redis')(session);
    console.log('Start ProdMode');
    redisStore = require('connect-redis')(session);
    app.use(session({
        name: 'token',
        secret: 'KCiH6SNsPh0Rhb5J',
        store: new redisStore({ host: 'session_db', port: 6379, prefix: 'adv.' }),
        saveUninitialized: true,
        resave: false
    }));
}

if (process.env.NODE_ENV === 'dev') {
    console.log('Start DevMode');
    app.use(session({
        name: 'token',
        secret: 'KCiH6SNsPh0Rhb5J',
        cookie: {
            maxAge: 60 * 60 * 1000
        },
        saveUninitialized: true,
        resave: false
    }));
}



app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server(config);
routerAdapter(app);
app.get('*', (req, res) => { res.sendFile(__dirname + '/public/index.html'); });
app.listen(80);