import privateData from "../utility/privateData.js";

export default function forwardChildrenTo(view) {
  privateData(this).forwardChildrenTo = view;
  return this;
}
