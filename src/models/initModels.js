const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)
    //Un usuario puede tener muchos posts
    Users.hasMany(Posts)
    //Un posts pertenece a un usuario
    Posts.belongsTo(Users)
    //Un usuario puede tener muchos likes
    Users.hasMany(Likes)
    //Un like pertenece a un usuario
    Likes.belongsTo(Users)
    //Un post puede tener muchos likes
    Posts.hasMany(Likes)
    //Un like pertenece a un post
    Likes.belongsTo(Posts)
}

module.exports = initModels