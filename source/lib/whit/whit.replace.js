export default function replace(...newChildren) {
  newChildren = [].concat.apply([], newChildren); // Flattens Array
  newChildren = newChildren.filter(child => { return child !== undefined; });

  if (newChildren.length > 0) {
    this.clear();
    this.append(newChildren);
    return this;
  } else {
    this.clear();
    return this;
  }
}
