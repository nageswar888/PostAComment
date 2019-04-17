import {postController} from '../controllers/post-controller';

export class postRoutes {
  static init(router) {
    router.route('/post')
      .get(postController.getAll)
      .post(postController.createNew);

  }
}
