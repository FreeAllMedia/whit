import privateData from "../utility/privateData.js";

export default function on(eventName, eventHandler) {
  let view = privateData(this).forwardEventsTo || this;

  view.element.addEventListener(eventName, event => {
    eventHandler(view, event);
  });

  return this;
}
