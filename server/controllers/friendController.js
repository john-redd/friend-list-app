module.exports = {
  addFriend: ( req, res ) => {
    const db = req.app.get('db');
    const { name, age, hobby } = req.body;

    db.add_friend([name, age, hobby])
    .then(newFriend => res.status(201).send(newFriend))
    .catch(err => console.log('addFriend', err));
  },
  getFriends: ( req, res ) => {
    const db = req.app.get('db');

    db.get_friends()
    .then(friends => res.status(200).send(friends))
    .catch(err => console.log('getFriends', err));
  },
  editFriend: ( req, res ) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { name, age, hobby } = req.body;

    db.edit_friend([id, name, age, hobby])
    .then(updatedFriend => res.status(200).send(updatedFriend))
    .catch(err => console.log(err))
  },
  deleteFriend: ( req, res ) => {
    const db = req.app.get('db');
    const { id } = req.params;

    db.delete_friend([id])
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
  },
}