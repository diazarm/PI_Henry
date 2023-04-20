const { Router } = require('express');
const getRouter = require ('./getRouter');
const tempRouter = require ('./tempRouter.js');

const mainRouter = Router();

mainRouter.use("/", getRouter);

mainRouter.use("/", tempRouter);


module.exports = mainRouter;
