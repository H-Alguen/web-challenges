import { generateRandomCharacter } from "./random-character";

export default function handler(request, response) {
  response.status(200).json(generateRandomCharacter());
}
