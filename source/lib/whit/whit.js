import privateData from "../utility/privateData.js";

const include = Symbol(),
      setDefaults = Symbol();

export default class Whit {
  /* eslint-disable no-multi-spaces */
  constructor(options) {
    options = options || {};

    this.initialize(options);
    this[setDefaults](options);
  }

  initialize() {} // Stubbed for SubView overriding

  /* Read-Only Properties */
  get element() { return privateData(this).element; }
  get tag() { return privateData(this).tag; }

  /* Attributes */
  id(newId)                       { return this[include]("id", newId); }
  className(newClassName)         { return this[include]("className", newClassName); }
  attribute(name, value)          { return this[include]("attribute", name, value); }
  attributes(newAttributeValues)  { return this[include]("attributes", newAttributeValues); }

  /* Contents */
  contents(newContents)           { return this[include]("contents", newContents); }
  children(...newChildren)        { return this[include]("children", ...newChildren); }
  replace(...newChildren)         { return this[include]("replace", ...newChildren); }
  append(...newChildren)          { return this[include]("append", ...newChildren); }
  clear()                         { return this[include]("clear"); }

  /* Events */
  on(eventName, eventHandler)     { return this[include]("on", eventName, eventHandler); }
  trigger(eventName)              { return this[include]("trigger", eventName); }
  forwardEventsTo(view)           { return this[include]("forwardEventsTo", view); }
  toString()                      { return this[include]("toString"); }

  /* Private Methods */
  [include](filename, ...functionArguments) {
    return require(`./whit.${filename}.js`).default.apply(this, functionArguments);
  }

  [setDefaults](options) {
    const _ = privateData(this);

    _.tag = options.tag || "div";
    _.element = options.element || document.createElement(this.tag);

    this.id(options.id);
    this.className(options.className);
    this.attributes(options.attributes);
    this.contents(options.contents);
    this.children(options.children);
    this.forwardEventsTo(options.forwardEventsTo);

    for (let eventName in options.on) {
      const eventHandler = options.on[eventName];
      this.on(eventName, eventHandler);
    }
  }
}
