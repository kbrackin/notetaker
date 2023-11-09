const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

const apiRoutes = require('./routes/api.js')

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html')
});



app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
