import { Router } from 'express';
import Route from '@interfaces/routes.interface';
import FileController from '@/controllers/file.controller';

class FileRoute implements Route {
  public path = '/file';
  public router = Router();
  public fileController = new FileController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/upload`, this.fileController.upload);
  }
}

export default FileRoute;
