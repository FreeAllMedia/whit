import privateData from "./utility/privateData.js";

export default function children(...newChildren) {
  const _ = privateData(this);

  newChildren = [].concat.apply([], newChildren); // Flattens Array
  newChildren = newChildren.filter(child => { return child !== undefined; });

  if (newChildren.length > 0) {
    this.clear();
    this.append(newChildren);
    return this;
  } else {
    return _.children;
  }
}
