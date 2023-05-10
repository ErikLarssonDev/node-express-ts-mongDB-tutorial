/// <reference types="express-serve-static-core" />
/// <reference types="qs" />
/// <reference types="express" />
import multer, { FileFilterCallback } from "multer";
export interface UploaderMiddlewareOptions {
    types?: string[];
    fieldName?: string;
}
export declare class Uploader {
    uploadDir?: string | undefined;
    fileFilter: (types?: Array<string>) => (req: Req, file: Express.Multer.File, cb: FileFilterCallback) => void;
    storage: multer.StorageEngine;
    defaultUploadDir: string;
    constructor(uploadDir?: string | undefined);
    uploadMultipleFiles(options: UploaderMiddlewareOptions): import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    uploadSingleFile(options: UploaderMiddlewareOptions): import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
}
