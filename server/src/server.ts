import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

// forma do express entender o corpo da requisição em formato JSON.

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); 

// Request Params: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na propria rota, geralmente opcionais para filtros, paginação...
// Request BOdy: Parâmetros para criação e atualização de informações

app.use(errors());

app.listen(3333);