import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import { dBConnectionString } from './config/index.js';
import { setupController } from './controllers/setupController.js';
import express from 'express';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.envPORT || 3000;

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});

mongoose.connect(dBConnectionString);
setupController(app);
app.listen(port);
