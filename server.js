// Imports
var express     = require('express');
var bodyParser  = require('body-parser');
var apiRouter   = require('./apiRouter').router;
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var expressjwt = require('express-jwt');
var schema=require('./schema');
var models = require('./models');
var jwt  = require('./utils/jwt.utils');

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static('public'));

const SECRET = 'say';

const auth = expressjwt({
    secret: SECRET,
    credentialsRequired: false,
  });

/*
const addUser = async (req) => {
    var Head = req.headers['authorization'];
    var userId = jwt.getUserId(Head);
    try {
        if (userId>0)
            return console.log('Utilisateur autorisé à se connecter Id : ' + userId);
        console.log('Utilisateur non autorisé');
    } catch (err) {
      console.log(err);
    }
    req.next();
  };
  server.use(addUser);

server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('invalid token...');
    }
  });
*/
server.use(
    '/graphql',
    bodyParser.json(),
    auth,  // A utiliser pour la méthode automatique de gestion des autorisations
    graphqlHTTP(req => ({
        schema : schema,
        context: {
          models,
          SECRET,
          user: req.user,
        },
        graphiql: true  
      })
    ));
server.listen(4000, () => console.log('GraphQl on localhost:4000/graphql'));
