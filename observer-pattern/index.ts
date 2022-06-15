export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

export interface Observer {
  update(): void;
}

export interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    // remove observer by id
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class WeatherDisplay implements Observer {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);

    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
  }

  // weather data update listener
  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    console.log(
      `weather updated. temperature: ${this.temperature}, humidity: ${this.humidity}`
    );
  }
}

const weatherData = new WeatherData();

const display = new WeatherDisplay(weatherData);

weatherData.setMeasurements(10, 10, 1);
weatherData.setMeasurements(12, 15, 1);
weatherData.setMeasurements(16, 19, 1);
