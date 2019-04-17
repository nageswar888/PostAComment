import {likeController} from '../controllers/like-controller';

export class likeRoutes {
  static init(router) {
    router.route('/like')
      .get(likeController.getAll)
      .post(likeController.createNew);

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

