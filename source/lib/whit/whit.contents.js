export default function contents(newContents) {
  if (newContents) {
    this.element.innerHTML = newContents;
    return this;
  } else {
    return this.element.innerHTML;
  }
}
