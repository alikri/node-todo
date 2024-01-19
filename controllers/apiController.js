import { Todos } from '../models/todoModel.js';
import bodyParser from 'body-parser';

export const apiController = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/:uname', async (req, res) => {
    try {
      const todos = await Todos.find({ username: req.params.uname });
      res.send(todos);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/api/todo/:id', async (req, res) => {
    try {
      const todo = await Todos.findById(req.params.id);
      res.send(todo);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/todo', async (req, res) => {
    if (req.body.id) {
      try {
        await Todos.findByIdAndUpdate(req.body.id, {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        });
        res.send('Success');
      } catch (err) {
        res.status(500).send(err);
      }
    } else {
      const newTodo = new Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });

      try {
        await newTodo.save();
        res.send('Success');
      } catch (err) {
        res.status(500).send(err);
      }
    }
  });

  app.delete('/api/todo', async (req, res) => {
    try {
      await Todos.findByIdAndDelete(req.body.id);
      res.send('Success');
    } catch (err) {
      res.status(500).send(err);
    }
  });
};
