"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var add_service_1 = __importDefault(require("./controllers/add-service"));
var fetch_services_1 = __importDefault(require("./controllers/fetch-services"));
var fetch_service_1 = __importDefault(require("./controllers/fetch-service"));
var update_service_1 = __importDefault(require("./controllers/update-service"));
var delete_service_1 = __importDefault(require("./controllers/delete-service"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose_1.default.set('useFindAndModify', false);
var db = mongoose_1.default.connection;
var app = express_1.default();
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//The router
app.post('/service', add_service_1.default);
app.get('/services', fetch_services_1.default);
app.get('/service/:id', fetch_service_1.default);
app.put('/service', update_service_1.default);
app.delete('/service/:id', delete_service_1.default);
app.listen(process.env.port, function () { return console.log("The server is running on http://localhost:" + process.env.port); });
