import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import userRouter from './api/user/router.js';
import productRouter from './api/laptop/router.js';
import orderRouter from './api/order/router.js';
import fileRouter from './api/file/router.js';
import mouseRouter from './api/mouse/router.js';
import pcRouter from './api/pc/router.js';

mongoose.connect('mongodb+srv://root:root@redbool.hpiqh.mongodb.net/redbool?retryWrites=true&w=majority');

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/laptop', productRouter);
app.use('/order', orderRouter);
app.use('/file', fileRouter);
app.use('/mouse', mouseRouter);
app.use('/pc', pcRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  res.status(500).send({
    status: 'server error',
    message: err.message,
  });
});

// app.use('/uploads/:fileName', orderRouter);

export default app;
