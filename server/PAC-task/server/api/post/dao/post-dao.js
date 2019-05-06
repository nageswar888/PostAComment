import models from '../../../models';
import Promise from 'bluebird';

export class postDao {


   /*static getAll(limit,offset) {
     console.log("-----")
     return new Promise((resolve, reject) => {
       models.Post.findAndCountAll()
         .then(post => {
/!*           let page = offset;      // page number
           let pages = Math.ceil(post.count / limit);
           let offset1 = limit * (page - 1);*!/
console.log(limit);
console.log(offset);

           models.Post.findAll({
             limit: limit,
             offset: offset,
             order: [
               ['createdAt', 'DESC']]
           }).then(result =>{
             resolve(result);
           }).catch(err =>{
             reject(err);
           });

         })

           })
         .catch(error => {
           reject(error);
         });
     }*/


   static getAll() {
    return new Promise((resolve, reject) =>{
      models.Post.findAndCountAll()
        .then(branch => { resolve(branch); })
        .catch(error =>{ reject(error)})
    })
  }

  static createNew(_body) {
    return new Promise((resolve, reject) => {
      models.Post.create({
        text: _body.text,
        postedBy: _body.postedBy,
        title: _body.title
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

  static delete(_paramet) {
    return new Promise((resolve, reject) => {
      models.Post.destroy({where : { id: _paramet}})
        .then(post => {
          resolve(post);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
