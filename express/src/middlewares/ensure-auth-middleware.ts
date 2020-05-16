import { NextFunction, Request, Response } from 'express';

export function ensureAuth(req: Request, res: Response, next: NextFunction ): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Access Denied');
}
