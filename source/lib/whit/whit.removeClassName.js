export default function removeClassName(className) {
  if (className) {
    const classNames = this.className().split(" ");
    const removeIndex = classNames.indexOf(className);
    classNames.splice(removeIndex, 1);
    this.className(classNames.join(" "));
  }
  return this;
}
