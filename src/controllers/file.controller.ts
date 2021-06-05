import FileService from '@/services/file.service';
import { NextFunction, Request, Response } from 'express';

class FileController {
    public fileService = new FileService();

    public upload = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const file= req['files'].file;
            await this.fileService.upload(file);
            res.status(200).json({ message: 'Success' });
        } catch (error) {
            next(error);
        }
    };

}

export default FileController;
