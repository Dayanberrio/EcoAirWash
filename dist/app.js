"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const helmet_1 = __importDefault(require("helmet"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const furnitureRoutes_1 = __importDefault(require("./routes/furnitureRoutes"));
const loggingMiddleware_1 = require("./middleware/loggingMiddleware");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(loggingMiddleware_1.logRequests);
app.use((0, express_session_1.default)({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
}));
app.use('/auth', authRoutes_1.default);
app.use('/furniture', furnitureRoutes_1.default);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
