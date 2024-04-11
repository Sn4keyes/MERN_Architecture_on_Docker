// ########## Imports : ##########
// const fs = require('fs');
// const path = require('path')
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ########## Declaration Routes : ##########
/*
const nameRoutes = require('./routes/...');
...
*/

// ########## Models : ##########
const HttpError = require('./models/http-error');

const app = express();
app.use(bodyParser.json());
// app.use('/uploads/images_users', express.static(path.join('uploads', 'images_users')));

// ########## Autorisation Header : ##########
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true); 
  res.setHeader('Access-Control-Allow-Origin', [
    'http://localhost:8083',
    'http://127.0.0.1:8083',
    'http://localhost:8082',
    'http://127.0.0.1:8082'
  ]);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

// ########## Autorisation Cors : ##########
// Autorisez uniquement certaines origines à accéder à votre backend :
const allowedOrigins = ['http://localhost:8083', 'http://localhost:8082'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Accès non autorisé par CORS'));
    }
  },
};
app.use(cors(corsOptions));

// ########## Redirection Routes : ##########
/*
app.use('/namePathRoute', nameRoutes);
...
*/

// ########## Management Erreur Routes : ##########
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, err => {
//       console.log(err);
//     });
//   }
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || 'An unknown error occurred!' });
// });

// mongoose
//   .connect(
//     `mongodb+srv://Backend_API:sO0xNVLQM8CzAAW6@cluster0.kjfexm6.mongodb.net/mern?retryWrites=true&w=majority`
//   )
//   .then(() => {
    app.listen(8082, () => {
      console.log('Backend server is running on port 8082');
    });
//   })
//   .catch(err => {
//     console.log(err);
//   });