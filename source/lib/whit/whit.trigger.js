export default function trigger(eventName) {
  this.element.dispatchEvent(new Event(eventName));
  return this;
}
