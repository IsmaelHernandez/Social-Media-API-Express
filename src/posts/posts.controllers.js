const Posts = require('../models/posts.models')
const uuid = require('uuid')


const findAllPosts = async () => {
    const data = await Posts.findAll()
    return data
}

const findPostById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })

    return data 
}

const createPosts = async (obj) => {
    const data = await Posts.create({
        id: obj.uuid.v4(),
        usersId: obj.usersId,
        content: obj.content
    })

    return data
}

const updatePosts = async (id, userId, obj) => {
    const data = await Posts.update(obj, {
        where: {
            id: id,
            userId: userId
        }
    })

    return data[0]
}

const removePosts = async (id) => {
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })

    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPosts,
    updatePosts,
    removePosts,
}