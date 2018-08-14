"use strict";
/* app/server.ts */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express = require("express");
var exphbs = require("express-handlebars");
// Import WelcomeController from controllers entry point
var controllers_1 = require("./controllers");
var path = __importStar(require("path"));
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = 3000;
app.set('views', path.join(__dirname, "../app/views"));
app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, "../app/views/layouts"),
    partialsDir: path.join(__dirname, "../app/views/partials")
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(path.join(__dirname, "../app/public"))));
// Mount the WelcomeController at the /welcome route
app.use('/welcome', controllers_1.WelcomeController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
