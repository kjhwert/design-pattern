import { Device } from "./Device";

export class Radio implements Device {
  private power: boolean;
  private channel: number;
  private volume: number;

  constructor() {
    this.power = false;
    this.channel = 0;
    this.volume = 0;
  }

  disable(): void {
    this.power = false;
  }

  enable(): void {
    this.power = true;
  }

  getChannel(): number {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }

  isEnabled(): boolean {
    return this.power;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}
