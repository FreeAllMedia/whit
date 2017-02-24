export default function appendClassName(newClass) {
  if (newClass && this.className().indexOf(newClass) === -1) {
    const classes = [
      this.attribute("class"),
      newClass
    ];
    this.className(classes.join(" "));
  }
  return this;
}
