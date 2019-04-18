import models from '../../../models';
import Promise from 'bluebird';

export class postDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Post.findAndCountAll()
        .then(post => {
          resolve(post);
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
      models.Post.create({
        text: _body.text,
        postedBy: _body.postedBy
      }).then(branch => {
        resolve(branch);
      })
        .catch(error => reject(error));
    });
  }

  static getById(_paramet) {
    return new Promise((resolve, reject) => {
      models.Post.findAll({where : { id: _paramet}})
        .then(post => {
          resolve(post);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
