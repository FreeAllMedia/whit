import privateData from "./utility/privateData.js";

export default function prepend(...newChildren) {
  const _ = privateData(this);

  if (_.forwardChildrenTo) {
    _.forwardChildrenTo.prepend(...newChildren);
  } else {
    // Flatten Array and Remove Undefineds
    newChildren = [].concat.apply([], newChildren);
    newChildren = newChildren.filter(child => { return child !== undefined; });

    _.children = _.children || [];

    newChildren.reverse().forEach(newChild => {
      _.children.unshift(newChild);
      this.element.insertBefore(newChild.element, this.element.firstChild);
      newChild.trigger("mount", this);
    });
  }

  return this;
}
