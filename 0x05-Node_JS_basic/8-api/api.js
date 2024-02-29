const express = require('express');
const app = express();
const PORT = 7865;
app.get('/', (_, res) => {
  res.send('Welcome');
});
app.listen(PORT, () => {
  console.log(`API available port ${PORT}`);
});
module.exports = app;
