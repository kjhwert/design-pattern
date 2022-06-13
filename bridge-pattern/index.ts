import { RemoteControl } from "./RemoteControl";
import { Tv } from "./Tv";
import { Radio } from "./Radio";
import { RemoteControlV2 } from "./RemoteControlV2";

const tv = new Tv();
const remote = new RemoteControl(tv);
remote.togglePower();
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
remote.channelUp();
// console.log(remote);

const radio = new Radio();
const radioRemote = new RemoteControlV2(radio);
radioRemote.togglePower();
radioRemote.volumeUp();
radioRemote.volumeUp();
radioRemote.volumeUp();
console.log(radioRemote);
radioRemote.volumeUp();
radioRemote.volumeUp();
radioRemote.volumeUp();
radioRemote.mute();
radioRemote.moveToChannel(30);
console.log(radioRemote);
