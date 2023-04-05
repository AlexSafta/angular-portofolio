export class Project {
  id?: number;
  title: string = '';
  description: string = '';
  image: string = '';
  url: string = '';
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/projects', (req: { body: any; }, res: any) => {
  const project = req.body;
  // gestionați datele primite aici
});

app.listen(3000, () => console.log('Serverul rulează pe portul 3000'));

