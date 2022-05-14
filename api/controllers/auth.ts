import { Request, Response } from 'express';

interface ReqBodyType {
	email: string;
	password: string;
}

export const login = async (req: Request, res: Response) => {
	const { email, password }: ReqBodyType = req.body;

	console.log(req.body);

	// Ideally search the user in a database,
	// throw an error if not found.
	if (!email) {
		return res.status(400).json({
			msg: 'Please provide email',
		});
	}

	if (!password) {
		return res.status(400).json({
			msg: 'Please provide password',
		});
	}

	if (password !== '1234') {
		return res.status(400).json({
			msg: 'User / Password are incorrect',
		});
	}

	res.json({
		name: 'Test User',
		token: 'A JWT token to keep the user logged in.',
		msg: 'Successful login',
	});
};
