import privateData from "./utility/privateData.js";

export default function clear() {
  privateData(this).children = [];
  while (this.element.firstChild) {
    this.element.removeChild(this.element.firstChild);
  }
}
