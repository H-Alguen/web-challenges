// Implement the launch sequence function here and export it as the default export.
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { liftoff } from "./core/liftoff.js";
import { rocket } from "./core/rocket.js";

loadPayload(rocket.id);
fuel((rocket.fuel = true));
countdown((rocket.countdown = 3));
liftoff(rocket.liftoff);
deployPayload();
