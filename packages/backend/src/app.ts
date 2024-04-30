import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

import AppRouter from './routes';
import todosRouter from './routes/api/todos.route';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

app.use('/todos', todosRouter);

router.init();

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
