import type { Request as ExpressRequest, Response as ExpressResponse } from 'express';

export interface Request extends ExpressRequest {
  // Define any additional properties here.
}

export interface Response extends ExpressResponse {
  // Define any additional properties here.
}
