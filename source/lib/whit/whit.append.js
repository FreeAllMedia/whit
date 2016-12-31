import privateData from "../utility/privateData.js";

export default function append(...newChildren) {
  const _ = privateData(this);

  newChildren = [].concat.apply([], newChildren); // Flattens Array

  newChildren = newChildren.filter(child => { return child !== undefined; });

  _.children = _.children || [];
  _.children = _.children.concat(newChildren);

  newChildren
    .map(childView => childView.element)
    .forEach(element => this.element.appendChild(element));

  return this;
}
