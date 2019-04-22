import {postDao} from '../dao/post-dao';

export class postController {
  static getAll(req, res) {
    postDao.getAll()
      .then(post => res.status(200).json(post))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _body = req.body;
    console.log('---------', _body)
    postDao.createNew(_body)
      .then(post => res.status(200).json(post))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
    let _paramet = req.params.id;
    postDao.getById(_paramet)
      .then(post => res.status(200).json(post))
      .catch(error => res.status(400).json(error));
  }

  static delete(req, res) {
    let _paramet = req.params.id;
    postDao.delete(_paramet)
      .then(post => res.status(200).json(post))
      .catch(error => res.status(400).json(error));
  }
}
