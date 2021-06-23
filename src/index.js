require('dotenv').config({
    path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
});

const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
const { MemoryStore } = require('express-session');
const TreeNode = require('./models/TreeNode');

// Settings
app.set('port', process.env.PORT || 3000);

// Static files
app.use(express.static(path.join(__dirname,'public')));

app.use(require('./middlewares/session'));

// Middleware para mensajes de error
app.use((req, res, next) => {
    if (req.session) {
        res.locals.messages = req.session.messages;
        req.session.messages = {};
    }
    next();
});

// React 
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public/')});
  });

// Starting the server
app.listen(app.get('port'), ()=> {
    console.log(`server on port ${app.get('port')}`);
})