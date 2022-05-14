import express from 'express';

import validateInput from './validation';
import { login } from '../api/controllers/auth';
import { getArtworks } from '../api/controllers/getArtworks';
import { check } from 'express-validator';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/login', (req, res) => {
	console.log(req.body);
	login(req, res);
});

app.post('/getArtworks', (req, res) => {
	console.log(req.query);
	getArtworks(req, res);
});

app.listen(port, () =>
	console.log(`
	🚀 Server ready at: http://localhost:${port}`)
);
