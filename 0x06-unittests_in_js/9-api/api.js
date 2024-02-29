const express = require('express');
const app = express();
const PORT = 7865;
app.get('/', (_, res) => {
  res.send('Welcome');
});
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods ${id}`);
});
app.listen(PORT, () => {
  console.log(`API available port ${PORT}`);
});
module.exports = app;
