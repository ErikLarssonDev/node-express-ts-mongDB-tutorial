import { Response, NextFunction } from 'express';
export declare const errorHandler: (err: Error, req: Req, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
