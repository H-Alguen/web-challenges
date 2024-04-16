import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
  if (request.url.startsWith("/api")) {
    if (request.url === "/api/fish/1") {
      response.statusCode = 200;
      response.end("Fish 1");
      return;
    }
    if (request.url === "/api/fish/2") {
      response.statusCode = 200;
      response.end("Fish 2");
      return;
    }
  }

  if (request.url === "/") {
    response.statusCode = 200;
    response.end("Hello World");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
