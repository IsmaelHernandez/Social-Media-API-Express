const { DataTypes } = require('sequelize')
const db = require('../utils/database')
const uuid = require()
const Users = require('../models/users.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    content: {
        type:DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, Infinity]
        }
    }
})


module.exports = Posts