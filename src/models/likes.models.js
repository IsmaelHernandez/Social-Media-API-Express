const {DataTypes} = require('sequelize')
const db = require('../utils/database')
const Posts = require('../models/posts.models')
const Users = require('../models/users.models')

const Likes = db.define('likes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId : {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: "id",
            model: Users
        }
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Posts
        }
    }
})

module.exports = Likes