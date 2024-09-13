import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import furnitureRoutes from './routes/furnitureRoutes';
import { logRequests } from './middleware/loggingMiddleware';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(logRequests);

app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true,
}));

app.use('/auth', authRoutes);
app.use('/furniture', furnitureRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
