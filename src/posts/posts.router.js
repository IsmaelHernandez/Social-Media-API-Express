const router = require('express').Router()
const ServicesPosts = require('../posts/posts.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(ServicesPosts.getAllPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), ServicesPosts.postNewPost)

router.route('/:id')
    .get(ServicesPosts.getPostsById)
    .patch(passportJWT.authenticate('jwt', {session: false}), ServicesPosts.patchPosts)
    .delete(passportJWT.authenticate('jwt', {session: false}), ServicesPosts.deletePosts)

module.exports = router