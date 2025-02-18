const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to retrieve user' }); //Improved error response
      return; //Important to stop execution after error handling
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    } else {
      res.json(user);
    }
  });
});