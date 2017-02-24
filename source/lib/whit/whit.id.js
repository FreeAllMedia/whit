export default function id(newId) {
  if (newId) {
    this.element.id = newId;
    return this;
  } else {
    return this.element.id;
  }
}
