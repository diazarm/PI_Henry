const { Router } = require('express');
const dogRouter = require ('./dogRouter');
const tempRouter = require ('./tempRouter.js');

const mainRouter = Router();

mainRouter.use("/", dogRouter);

mainRouter.use("/", tempRouter);


module.exports = mainRouter;
