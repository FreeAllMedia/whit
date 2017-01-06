import privateData from "../utility/privateData.js";

export default function on(eventName, eventHandler) {
  const _ = privateData(this);
  let view = _.forwardEventsTo || this;

  view.element.addEventListener(eventName, event => {
    const eventArguments = _.eventArguments || [];
    eventHandler(view, event, ...eventArguments);
    //_.eventArguments = [];
  });

  return this;
}
