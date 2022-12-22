const router = require('express').Router()
const ServicesPosts = require('../posts/posts.services')
const passportJWT = require('../middlewares/auth.middleware')
const ServicesLikes = require('../likes/likes.services')

router.route('/')
    .get(ServicesPosts.getAllPosts)
    .post(passportJWT.authenticate('jwt', { session: false }), ServicesPosts.postNewPost)

router.route('/:id')
    .get(ServicesPosts.getPostsById)
    .patch(passportJWT.authenticate('jwt', { session: false }), ServicesPosts.patchPosts)
    .delete(passportJWT.authenticate('jwt', { session: false }), ServicesPosts.deletePosts)


router.route('/:id/likes')
    .get(ServicesLikes.getAllLikesByPosts)
    .post(passportJWT.authenticate('jwt', {session: false}), ServicesLikes.postLikes)

    
module.exports = router
