import dotenv from 'dotenv';
dotenv.config();

export const dBConnectionString = `mongodb+srv://alinanosovets:${process.env.DB_PASS}@nodetodosample.joxkyvn.mongodb.net/?retryWrites=true&w=majority`;
