import privateData from "./utility/privateData.js";

export default function on(eventName, eventHandler) {
  const _ = privateData(this);

  const views = _.forwardEventsTo || [this];

  views.forEach(view => {
    view.element.addEventListener(eventName, event => {
      const eventArguments = _.eventArguments || [];
      eventHandler(view, event, ...eventArguments);
      //_.eventArguments = [];
    });
  });

  return this;
}
