"use strict";
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const car = new Car("Toyota", "Corolla", 2024);
const makeElement = document.getElementById("car-make");
const modelElement = document.getElementById("car-model");
const yearElement = document.getElementById("car-year");
const startButton = document.getElementById("start-button");
const statusElement = document.getElementById("status");
const statusMessage = document.getElementById("status-message");
if (!(makeElement instanceof HTMLElement) ||
    !(modelElement instanceof HTMLElement) ||
    !(yearElement instanceof HTMLElement) ||
    !(startButton instanceof HTMLButtonElement) ||
    !(statusElement instanceof HTMLElement) ||
    !(statusMessage instanceof HTMLElement)) {
    throw new Error("The car display is missing a required page element.");
}
makeElement.textContent = car.make;
modelElement.textContent = car.model;
yearElement.textContent = String(car.year);
startButton.addEventListener("click", () => {
    car.start();
    statusMessage.textContent = `${car.make} ${car.model} is ready to go.`;
    statusElement.classList.add("is-running");
    startButton.textContent = "Engine running";
    startButton.disabled = true;
});
