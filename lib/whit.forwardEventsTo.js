import privateData from "./utility/privateData.js";

export default function forwardEventsTo(...views) {
  privateData(this).forwardEventsTo = views;
  return this;
}
