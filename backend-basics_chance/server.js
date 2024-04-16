import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const name = chance.name({ nationality: "it" });
const age = chance.age();
const profession = chance.profession();

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
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
