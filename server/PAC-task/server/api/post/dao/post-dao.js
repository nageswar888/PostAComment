import models from '../../../models';
import Promise from 'bluebird';
import Sequelize from "sequelize";
const Op = Sequelize.Op


export class postDao {


  static getAll(pageData,limit,search) {
    return new Promise((resolve, reject) => {
      models.Post.findAndCountAll()
        .then(data=>{
            let page = pageData;      // page number
            let pages = Math.ceil(data.count / limit);
            let offset = limit * (page - 1);

            models.Post.findAndCountAll({
              where:{
                [Op.or]: [
                  {
                    postedBy: {
                      [Op.iLike]: '%' + search + '%'
                    }
                  },
                  {
                    title: {
                      [Op.iLike]: '%' + search + '%'
                    }
                  },
                    ]
              },
              limit: limit,
              offset: offset,
              order: [
                ['createdAt', 'DESC']
              ]
            }).then(result =>{
              resolve(result);
            }).catch(err =>{
                reject(err);
              });
          }).catch(error=>{
          reject(error);
        })
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
