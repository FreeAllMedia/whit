import privateData from "../utility/privateData.js";

export default function append(...newChildren) {
  const _ = privateData(this);

  if (_.forwardChildrenTo) {
    _.forwardChildrenTo.append(...newChildren);
  } else {
    // Flatten Array and Remove Undefineds
    newChildren = [].concat.apply([], newChildren);
    newChildren = newChildren.filter(child => { return child !== undefined; });

    _.children = _.children || [];
    _.children = _.children.concat(newChildren);

    newChildren
      .map(childView => childView.element)
      .forEach(element => this.element.appendChild(element));
  }

  return this;
}
