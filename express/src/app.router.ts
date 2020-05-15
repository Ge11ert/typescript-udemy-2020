import express from 'express';

export default class AppRouter {
  private static instance: express.Router;

  public static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
