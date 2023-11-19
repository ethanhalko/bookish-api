import type { Request, Response } from '../types';

export class IndexController {
  public getIndex(req: Request, res: Response): void {
    res.send('Nothing Here!');
  }
}
