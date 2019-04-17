import {likeDao} from '../dao/like-dao';

export class likeController {
  static getAll(req, res) {
    likeDao.getAll()
      .then(like => res.status(200).json(like))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _body = req.body;
    console.log('---------', _body)
    likeDao.createNew(_body)
      .then(like => res.status(200).json(like))
      .catch(error => res.status(400).json(error));
  }
}

