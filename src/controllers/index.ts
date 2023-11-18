import { Request, Response } from '../types/index';

export class IndexController {
  public getIndex(req: Request, res: Response): void {
    res.send('Hello World!');
  }
}