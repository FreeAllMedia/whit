export default function attribute(name, value) {
  if (value || value === "") {
    if (value === "") {
      this.element.removeAttribute(name);
    } else {
      this.element.setAttribute(name, value);
    }
    return this;
  } else {
    return this.element.getAttribute(name);
  }
}
