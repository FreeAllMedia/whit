import privateData from "./utility/privateData.js";

import "./utility/customEvents.js";

const include = Symbol();

export default class Whit {
  /* eslint-disable no-multi-spaces */
  constructor(options) {
    options = options || {};

    this.initialize(options);
    this[include]("setDefaults", options);
  }

  // Stubs for SubView overriding
  initialize() {}

  /* Read-Only Properties */
  get tag() { return privateData(this).tag; }

  /* Attributes */
  id(newId)                       { return this[include]("id", newId); }
  className(newClassName)         { return this[include]("className", newClassName); }
  appendClassName(newClassName)   { return this[include]("appendClassName", newClassName); }
  removeClassName(className)      { return this[include]("removeClassName", className); }
  attribute(name, value)          { return this[include]("attribute", name, value); }
  attributes(newAttributeValues)  { return this[include]("attributes", newAttributeValues); }

  /* Contents */
  contents(newContents)           { return this[include]("contents", newContents); }
  children(...newChildren)        { return this[include]("children", ...newChildren); }
  replace(...newChildren)         { return this[include]("replace", ...newChildren); }
  append(...newChildren)          { return this[include]("append", ...newChildren); }
  prepend(...newChildren)         { return this[include]("prepend", ...newChildren); }
  clear()                         { return this[include]("clear"); }

  /* Events */
  on(eventName, eventHandler)     { return this[include]("on", eventName, eventHandler); }
  trigger(eventName, ...args)     { return this[include]("trigger", eventName, ...args); }
  forwardEventsTo(...views)       { return this[include]("forwardEventsTo", ...views); }
  forwardChildrenTo(view)         { return this[include]("forwardChildrenTo", view); }
  toString()                      { return this[include]("toString"); }

  /* Private Methods */
  [include](filename, ...functionArguments) {
    return require(`./whit.${filename}.js`).default.apply(this, functionArguments);
  }
}
