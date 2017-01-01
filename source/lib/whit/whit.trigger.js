import privateData from "../utility/privateData.js";

export default function trigger(eventName) {
  let view = privateData(this).forwardEventsTo || this;

  view.element.dispatchEvent(new Event(eventName));
  return this;
}
