import express from 'express';
import path from 'path';
import {
  creteFile, readFile, writeFile, isExists,
} from '../../utils/fs.js';

const usersUrl = path.resolve('product.json');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('get all');
  res.send('Hello World product!');
});

router.get('/:index', (req, res) => {
  const { params } = req;
  const index = Number(params.index);
  console.log('get one', index);
  res.send('Hello World!');
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    if (!isExists(usersUrl)) {
      await creteFile('users.json');
    }
    let users = await readFile(usersUrl);
    if (!users) {
      users = [];
    }
    users.push(body);
    await writeFile(usersUrl, users);
    console.log('post', body);
    res.send(JSON.stringify(body));
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:index', (req, res) => {
  const { params } = req;
  const index = Number(params.index);
  console.log('delete', index);
  res.send('Hello World!');
});

router.patch('/:index', (req, res) => {
  const { body, params } = req;
  const index = Number(params.index);
  console.log('patch', body);
  console.log('patch', index);
  res.send('Hello World!');
});

export default router;