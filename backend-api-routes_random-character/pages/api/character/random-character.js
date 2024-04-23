import Chance from "chance";

export function generateRandomCharacter() {
  const chance = new Chance();

  //const name = chance.name;
  //const age = chance.age;

  const character = {
    firstname: chance.first(),
    lastname: chance.last(),
    age: chance.age(),
    birhday: chance.birthday({ string: true }),
    email: chance.email({ domain: "example.com" }),
    profession: chance.profession({ rank: true }),
  };

  return character;
}
