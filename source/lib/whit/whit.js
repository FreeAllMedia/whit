import privateData from "../utility/privateData.js";

const include = Symbol();

export default class Whit {
  constructor(options) {
    options = options || {};

    const _ = privateData(this);

    _.tag = options.tag || "div";
    _.element = options.element || document.createElement(this.tag);

    this.id(options.id);
    this.className(options.className);
    this.attributes(options.attributes);
    this.contents(options.contents);
    this.children(options.children);

    for (let eventName in options.on) {
      const eventHandler = options.on[eventName];
      this.on(eventName, eventHandler);
    }
  }

  get element() { return privateData(this).element; }
  get tag() { return privateData(this).tag; }

  id(newId) { return this[include]("id", newId); }
  className(newClassName) { return this[include]("className", newClassName); }
  attribute(name, value) { return this[include]("attribute", name, value); }
  attributes(newAttributeValues) { return this[include]("attributes", newAttributeValues); }
  contents(newContents) { return this[include]("contents", newContents); }
  on(eventName, eventHandler) { return this[include]("on", eventName, eventHandler); }
  trigger(eventName) { return this[include]("trigger", eventName); }
  clear() { return this[include]("clear"); }
  children(...newChildren) { return this[include]("children", ...newChildren); }
  append(...newChildren) { return this[include]("append", ...newChildren); }
  toString() { return this[include]("toString"); }

  [include](filename, ...functionArguments) {
    return require(`./whit.${filename}.js`).default.apply(this, functionArguments);
  }
}
