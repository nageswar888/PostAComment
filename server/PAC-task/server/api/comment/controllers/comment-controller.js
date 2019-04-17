import {commentDao} from '../dao/comment-dao';

export class commentController {
  static getAll(req, res) {
    commentDao.getAll()
      .then(comment => res.status(200).json(comment))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _body = req.body;
    console.log('---------', _body)
    commentDao.createNew(_body)
      .then(comment => res.status(200).json(comment))
      .catch(error => res.status(400).json(error));
  }
}
