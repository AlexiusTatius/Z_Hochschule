import express from 'express';
import fileController from '../controllers/file.controller.js';

const router = express.Router();

let routes = (app) => {
    router.post("/upload", fileController.upload);
    router.get("/files", fileController.getListFiles);
    router.get("/files/:name", fileController.download);
    router.delete("/files/:name", fileController.remove);
  
    app.use(router);
  };
  
export default routes;
