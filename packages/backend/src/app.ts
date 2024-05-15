import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import AppRouter from './routes';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

router.init();

app.all('*', (req, res) => {
	res.status(404).json({ message: 'Page Not Found' });
});

app.use((err: Error, req: Request, res: Response): void => {
	if (!err.message) err.message = 'Something Went Wrong!';
	res.json({ error: err });
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
