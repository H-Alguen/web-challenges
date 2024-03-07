console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if(SUPER_SECRET_PASSWORD === receivedPassword){
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else{
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if(number%2){
    console.log("odd number");
}else{
    console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if(numberOfHotdogs<5){
    console.log("Hot Dog Price 2 euro");
} else if(numberOfHotdogs >=5 && numberOfHotdogs<100){
    console.log("Hot Dog Price 1,5 euro");
}else if(numberOfHotdogs>=100 && numberOfHotdogs<1000000){
    console.log("Hot Dog Price 1,00 euro");
} else if(numberOfHotdogs>=1000000){
    console.log("Hot Dog Price 0,10 euro");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 
    ? console.log("Still need to learn...")
    :console.log("Partytime!!!.");

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Hans" ? "Coach" : userName ) + "!";

console.log(greeting);
