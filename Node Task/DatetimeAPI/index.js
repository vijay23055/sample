import express from 'express';
import { getCurrenttime } from './timestamp/currentime.js'; // Ensure correct path and file extension

const api = express();

api.get('/time', getCurrenttime);

api.listen(8000, () => console.log('App is listening on port 8000'));
