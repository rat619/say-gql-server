var _    = require('lodash');
var bcrypt    = require('bcrypt');
var jwt  = require('./utils/jwt.utils');

module.exports = {
 /* User: {
    boards: ({ id }, args, { models }) =>
      models.Board.findAll({
        where: {
          owner: id,
        },
      }),
    suggestions: ({ id }, args, { models }) =>
      models.Suggestion.findAll({
        where: {
          creatorId: id,
        },
      }),
  },*/
Query: {
  allUsers: (parent, args, { models,user }) => {
    if (user){
      return models.User.findAll();
    }
    throw new Error('vous devez vous connecter'); 
  },
/*Exemple d'appel 
query
{
  allUsers
}*/
  me: (parent, args, { models, user }) => {
    if (user) {  
      // they are logged in
        return models.User.findOne({
        attributes: [ 'id', 'email', 'username', 'bio','createdAt','updatedAt' ],
        where: { id: user.Id }
        });        
    }
    // not logged in user
    throw new Error('Vous devez vous connecter');
    //return null;
  },
},
/*Exemple d'appel *
query
{
  me
}
*/
Mutation: {
    register: async (parent, args, { models }) => {
      const user = args;
      user.password = await bcrypt.hash(user.password, 12);
      return models.User.create(user);
/*Exemple d'Appel d'inscription
mutation
{
  register(username:"thierry",email:"rat619@test.fr",password:"tita619")
}
*/
    },
    login: async (parent, { email, password }, { models, SECRET },context) => {
      const user = await models.User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Not user with that email');
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Incorrect password');
      }
      // verify: needs secret | use me for authentication
      // decode: no secret | use me on the client side
      const token = jwt.generateTokenForUser(user,SECRET);
      return token;
/*Exemple d'Appel de connexion
mutation
{
  login(email:"rat619@test.fr",password:"tita619")
}
*/
      },
    updateUser: (parent, { username, newUsername }, { models }) =>
      models.User.update({ username: newUsername }, { where: { username } }),
/*Exemple de suppression
mutation
{
  updateUser(username:"thierry",newUsername:"antoni")
}
*/
    deleteUser: (parent, args, { models }) =>
      models.User.destroy({ where: args }),
/*Exemple de suppression
mutation
{
  deleteUser(username:"antoni")
}
*/
  },
};