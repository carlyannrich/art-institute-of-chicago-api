import { Request, Response, NextFunction } from 'express';

import { validationResult } from 'express-validator';

// validationResult: extracts the validation errors from a request and makes them available in a Result object.
const validateInput = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json(errors);
	}

	next();
};

export default validateInput;
