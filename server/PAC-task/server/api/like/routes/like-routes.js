import {likeController} from '../controllers/like-controller';

export class likeRoutes {
  static init(router) {
    router.route('/like')
      .get(likeController.getAll)
      .post(likeController.createNew);

    router.route('/like/:id')
      .get(likeController.getById)

  }
}

/*import {postController} from '../controllers/post-controller';

export class postRoutes {
  static init(router) {
    router.route('/post')
      .get(postController.getAll)
      .post(postController.createNew);

  }
}*/

