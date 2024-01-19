import { Todos } from '../models/todoModel.js';

export const setupController = (app) => {
  app.get('/api/setupTodos', (req, res) => {
    // seed my database
    const starterTodos = [
      {
        username: 'alinanosovets',
        todo: 'Finish course',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'alinanosovets',
        todo: 'Go to the gym',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'alinanosovets',
        todo: 'Learn AWS',
        isDone: false,
        hasAttachment: false,
      },
    ];

    Todos.create(starterTodos)
      .then((results) => {
        res.send(results);
      })
      .catch((err) => {
        // handle error
        res.status(500).send(err.message);
      });
  });
};
