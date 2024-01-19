import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.envPORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.listen(port);
