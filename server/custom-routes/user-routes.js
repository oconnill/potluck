let Parties = require('../models/party')

module.exports = {
  userParties: {
    path: '/userparties',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Parties'
      Parties.find({creatorId: req.session.uid})
        .then(parties => {
          res.send(handleResponse(action, parties))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  sharedBoards: {
    path: '/sharedBoards',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Boards'
      Boards.find({collaborators: { $in: req.session.uid}})
        .then(boards => {
          res.send(handleResponse(action, boards))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}

function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }