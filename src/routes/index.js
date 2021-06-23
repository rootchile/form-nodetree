// const express = require('express');
// const app = express();
// // Form Dia
// const TreeNode = require('../models/TreeNode');

// const preg1 = new TreeNode('formdia_pregunta1',
//                            '¿Es un proyecto de desarrollo urbano o turístico en zona con Plan Territorial evaluado estratégicamente?');

// const preg2 = new TreeNode('formdia_pregunta2',
//                            '¿El Proyecto se ejecutará en zona declarada latente o saturada?');

// const preg3 = new TreeNode('formdia_pregunta3',
//                             '¿Es un Conjunto habitacional con cantidad igual o superior a 80 viviendas, o 160 viviendas sociales?');
// preg1.set_show(true);
// preg1.descendants.push(preg2,preg3);
// preg2.descendants.push(preg3);

// // end From Dia
// app.get('/', (req, res)=> { return res.send('No existe formulario buscado'); });

// app.get('/form_dia', (req, res) => {
//     // res.redirect('/login');
//     req.session.messages = { error: 'mensaje de error acá' }

//     res.render('pages/form_dia', {
//         layout: 'main',
//         TITLE_WEB: process.env.TITLE_WEB,
//         TITLE_FORM: '¿Requiero Pertinencia (o DIA) para mi proyecto inmobiliario?',

//         PREGUNTAS: [ preg1, preg2, preg3 ]
//     });

// });

// app.get('/form_seia', (req, res) => {
//     // res.redirect('/login');
//     req.session.messages = { error: 'mensaje de error acá' }

//     res.render('pages/form_seia', {
//         layout: 'main',
//         TITLE_WEB: process.env.TITLE_WEB,
//         TITLE_FORM: process.env.TITLE_FORM
//     });

    
// });

// module.exports = app;