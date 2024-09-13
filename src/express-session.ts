import 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId: string; // O el tipo de dato que necesites
  }
}
