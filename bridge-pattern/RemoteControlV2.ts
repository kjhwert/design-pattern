import { RemoteControl } from "./RemoteControl";

export class RemoteControlV2 extends RemoteControl {
  mute() {
    this.device.setVolume(0);
  }

  moveToChannel(channel: number) {
    this.device.setChannel(channel);
  }
}
