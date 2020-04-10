require('dotenv').config();

const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const fc = require('./controllers/friendController');

app.use(express.json());

// End points
app.get('/api/friends', fc.getFriends);
app.post('/api/friends', fc.addFriend);
app.put('/api/friends/:id', fc.editFriend);
app.delete('/api/friends/:id', fc.deleteFriend);


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})
.then(db => {
  app.set('db', db)
  console.log('DB connected.')
  app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));
})
.catch(err => console.log(err))