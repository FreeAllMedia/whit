export default function toString() {
  const container = document.createElement("div");
  container.appendChild(this.element);
  return container.innerHTML;
}
