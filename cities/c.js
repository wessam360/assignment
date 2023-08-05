"use strict";
let describe_cities = (name, country = `Pakistan`) => {
    console.log(`${name} is the city of ${country}`);
};
describe_cities(`Rawalpindi`);
describe_cities(`Lahore`);
describe_cities(`Massachusetts`, `America`);
