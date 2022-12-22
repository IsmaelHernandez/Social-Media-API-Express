const PostsControllers = require('./posts.controllers')

const getAllPosts = (req, res) => {
    PostsControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: 'Missing Data' })
        })
}

const getPostsById = (req, res) => {
    const id = req.params.id
    PostsControllers.findPostById(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })

}

const postNewPost = (req, res) => {
    const userId = req.user.id
    const { content } = req.body
    PostsControllers.createPosts({ usersId, content })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const patchPosts = (req, res) => {
    const id = req.params.id
    const { content } = req.body
    const userId = req.user.id
    PostsControllers.updatePosts(id, userId, { content })
        .then(data => {
            if (data) {
                res.status(200).json({ message: `Post edited succesfully with id: ${id}` })
            } else {
                res.status(404).json({ message: `Post with id: ${id}, not found` })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const deletePosts = (req, res) => {
    const id = req.params.id
    PostsControllers.removePosts(id)
        .then(data => {
            if (data) {
                res.status(204).json()
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}





module.exports = {
    getAllPosts,
    getPostsById,
    postNewPost,
    patchPosts,
    deletePosts
}