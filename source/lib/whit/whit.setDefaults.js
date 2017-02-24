import privateData from "../utility/privateData.js";

export default function setDefaults(options) {
  const _ = privateData(this);

  _.tag = options.tag || "div";

  this.element = options.element || document.createElement(this.tag);

  this.id(options.id);
  this.className(options.className);
  this.attributes(options.attributes);
  this.contents(options.contents);
  this.children(options.children);

  if (options.forwardEventsTo) {
    this.forwardEventsTo(...options.forwardEventsTo);
  }

  this.forwardChildrenTo(options.forwardChildrenTo);

  for (let eventName in options.on) {
    const eventHandler = options.on[eventName];
    this.on(eventName, eventHandler);
  }
}
