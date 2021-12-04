import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(req.headers);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('headers listening on port', port);
});