export default function on(eventName, eventHandler) {
  this.element.addEventListener(eventName, eventHandler);
  return this;
}
