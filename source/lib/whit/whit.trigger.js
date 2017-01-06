import privateData from "../utility/privateData.js";

export default function trigger(eventName, ...eventArguments) {
  const _ = privateData(this);

  _.eventArguments = eventArguments;

  let view = _.forwardEventsTo || this;

  const event = new Event(eventName);
  view.element.dispatchEvent(event);

  _.eventArguments = [];

  return this;
}
