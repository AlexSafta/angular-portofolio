// project.ts
export class Project {
  id?: number;
  title = '';
  description = '';
  image = '';
  url = '';
}

// server.ts
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/projects', (req, res) => {
  const project = req.body;
  // gestionați datele primite aici
});

app.listen(3000, () => console.log('Serverul rulează pe portul 3000'));
