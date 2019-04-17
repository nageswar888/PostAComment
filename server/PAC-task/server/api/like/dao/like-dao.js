import models from '../../../models';
import Promise from 'bluebird';

export class likeDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Like.findAndCountAll()
        .then(like => {
          resolve(like);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /* static getAll() {
    return new Promise((resolve, reject) =>{
      models.Post.findAll({include:{ model: models.likes}})
        .then(branch => { resolve(branch); })
        .catch(error =>{ reject(error)})
    })
  }*/

  static createNew(_body) {
    return new Promise((resolve, reject) => {
      models.Like.create({
        postId: _body.postId,
        likedBy: _body.likedBy

      }).then(like => {
        resolve(like);
      })
        .catch(error => reject(error));
    });
  }
}
