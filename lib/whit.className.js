export default function className(newClass) {
  if (newClass) {
    this.attribute("class", newClass);
    return this;
  } else {
    return this.attribute("class") || "";
  }
}
