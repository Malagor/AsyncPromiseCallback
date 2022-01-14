const el = document.querySelector('.row');

const rundomSpeed = (max) => Math.floor(0.5 + Math.random() * max);
const TIME_ROUND = 50;
const DISTANCE = 200;

class Car {
  constructor(name, maxSpeed) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.interval = null;
  }

  start(distance) {
    let position = 0;
    let speed = 0;
    let turn = 1;

    return new Promise((resolve, reject) => {
      if (!distance) {
        reject(new Error('No distance!'));
        return;
      }

      this.interval = setInterval(() => {
        const crash = rundomSpeed(100) > 97;
        if (crash) {
          resolve({
            situation: 'crash',
            name: this.name,
            turn,
          });
          return;
        }

        speed = rundomSpeed(this.maxSpeed);

        position += speed;
        if (position >= distance) {
          this.stop();
          console.log(`Машинка ${this.name} приехала`);
          resolve({
            situation: 'winner',
            name: this.name,
            turn,
          });
          return;
        }

        // console.log({
        //   name: this.name,
        //   turn,
        //   speed,
        //   position,
        // });

        turn += 1;
      }, TIME_ROUND);
    });
  }

  stop() {
    clearInterval(this.interval);
  }
}

const printResult = (info) => {
  if (info.situation === 'crash') {
    console.warn(`Машинка ${info.name} поломалась на ${info.turn} раунде`);
    return;
  }

  console.log(`Машинка ${info.name} завершила гонку за ${info.turn} раундов`);
};

// const car = new Car('Turbo', 20);
// const car2 = new Car('DonaldDuck', 20);
//
// car.start(DISTANCE).then((info) => printResult(info));
//
// car2
//   .start(DISTANCE)
//   .then((info) => printResult(info))
//   .catch((err) => {
//     console.error('Произошла ошибка', err.message);
//   });

const carNames = ['Turbo', 'DonaldDuck', 'LoveIs', 'Orbit', 'Stimorol'];

const cars = carNames.map((name) => new Car(name, 20));

const carsRace = cars.map((car) => car.start(DISTANCE));

console.log('Гонка началась...');

Promise.all(carsRace).then((resultTable) => {
  resultTable
    .sort((info1, info2) => info1.turn - info2.turn)
    // .slice(0, 3)
    .forEach(printResult);
});

// Promise.race(carsRace).then((firstResult) => {
//   cars.forEach((car) => car.stop());
//   printResult(firstResult);
// });
