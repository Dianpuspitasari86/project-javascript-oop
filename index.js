class Car {
    constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
        this.owner = owner
        this.name = name
    }
    
    drive() {
        console.log(
            `The ${this.name} car owned by ${this.owner} drives on the road`)
        }

    getOwner() {
        return this.owner
    }

    getBrand() {
        return this.name
    }
}

const myCar = new Car('Dian Puspita Sari', 'Mini Cooper Cabrio Aquamarine' )

console.log(myCar)

myCar.drive()

console.log(myCar.getOwner())

class SportsCar extends Car {
    constructor ({ owner, name, color, price, engine}) {
        super(owner, name)
        this.color = color
        this.price = price
        this.engine = engine
    }

    getColor() {
        return this.color
    }

    getPrice() {
        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency : 'USD',
            minimumFractionDigits : 0
        }) . format(this.price)

        return formattedPrice
    }

    getEngine() {
        return this.engine
    }
}

const coolCar = new SportsCar ({
    owner : 'Dian',
    name : 'Mini Cooper Countryman',
    color : 'Red',
    price : '500000000',
    engine : 'Matic'
})

console.log(coolCar)

coolCar.drive()

console.log(coolCar.getColor())
console.log(coolCar.getPrice())

class Timer {
    constructor() {
      this.timeStart = null;
      this.timeStop = null;
      this.result = null;
    }
    start() {
      this.timeStart = Date.now();
      // document.getElementById("timeStart").innerText = this.timeStart;
      // console.log(
      //   `Timer now is start on ${this.timeStart.toLocaleTimeString()} miliseconds`
      // );
    }
    stop() {
      this.timeStop = Date.now();
      // console.log(
      //   `Timer stop at ${this.timeStop.toLocaleTimeString()} miliseconds`
      // );
    }
    duration() {
      this.result = this.timeStop - this.timeStart;
      // console.log(`Time duration is ${this.result} miliseconds`);
    }
  }
  const stopwatch = new Timer();
  
  function start() {
    let starts = document.getElementById("timeStart");
    stopwatch.start();
    starts.value = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  }
  
  function stop() {
    let stops = document.getElementById("timeStop");
    stopwatch.stop();
    stops.value = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    //console.log(typeof txtStop.value);
  }
  
  function duration() {
    event.preventDefault();
    let durations = document.getElementById("duration");
    stopwatch.duration();
    durations.value = `${stopwatch.result / 1000} s`;
  }