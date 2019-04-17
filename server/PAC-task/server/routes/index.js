import {postRoutes} from "../api/post/routes/post-routes";
import {commentRoutes} from "../api/comment/routes/comment-routes";
import {likeRoutes} from "../api/like/routes/like-routes";

export default class Routes {
   static init(app, router) {
     postRoutes.init(router),
     commentRoutes.init(router),
     likeRoutes.init(router);

     app.use("/", router);
   }
}
