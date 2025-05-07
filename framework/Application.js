const http = require("http");
const EventEmitter = require("events");
const { URL } = require("url");

class Framework {
  constructor() {
    this.server = this._createServer();
    this.emitter = new EventEmitter();
    this.middlewares = [];
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        const routeMask = this._getRouteMask(path, method);
        const handler = endpoint[method];
        this.emitter.on(routeMask, (req, res) => handler(req, res));
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = "";

      req.on("data", (chunk) => (body += chunk));

      req.on("end", () => {
        try {
          if (body) req.body = JSON.parse(body);
          else req.body = {};

          const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
          req.query = Object.fromEntries(parsedUrl.searchParams.entries());

          res.send = (data) => {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
          };

          res.json = (data) => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
          };

          res.status = function (code) {
            this.statusCode = code;
            return this;
          };

          let index = 0;
          const next = () => {
            if (index < this.middlewares.length) {
              const middleware = this.middlewares[index++];
              middleware(req, res, next);
            } else {
              const emitted = this.emitter.emit(
                this._getRouteMask(parsedUrl.pathname, req.method),
                req,
                res
              );
              if (!emitted) {
                res.status(404).send("Route not found");
              }
            }
          };

          next();
        } catch (err) {
          res.statusCode = 500;
          res.end("Internal Server Error: " + err.message);
        }
      });
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
}

module.exports = Framework;
