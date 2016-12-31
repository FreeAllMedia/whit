export default function attribute(name, value) {
  if (value) {
    this.element.setAttribute(name, value);
    return this;
  } else {
    return this.element.getAttribute(name);
  }
}
