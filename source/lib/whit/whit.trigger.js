import privateData from "../utility/privateData.js";

export default function trigger(eventName, ...eventArguments) {
  const _ = privateData(this);

  _.eventArguments = eventArguments;

  const views = _.forwardEventsTo || [this];

  const event = new Event(eventName);
  views.forEach(view => {
    view.element.dispatchEvent(event);
  });

  _.eventArguments = [];

  return this;
}
