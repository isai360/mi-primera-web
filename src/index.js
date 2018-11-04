const express = require('express');
const app = express();
const path = require('path');

//settings (configuraciones)
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares (URL)

//routes (rutas del servidor)
app.use(require('./routes/index')); 

//static files(archivos HTML)
app.use(express.static(path.join(__dirname, 'public')));


// listening el servidor
app.listen(8080, () => {
    console.log('Servidor en el puerto', app.get('port'));
});