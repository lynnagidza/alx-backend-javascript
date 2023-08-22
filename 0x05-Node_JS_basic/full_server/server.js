import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.databaseFileName = process.argv[2]; // Retrieve the database file name from command-line arguments
  next();
});

app.use('/', routes);

const port = 1245;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
