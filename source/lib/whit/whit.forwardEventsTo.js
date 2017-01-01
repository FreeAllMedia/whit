import privateData from "../utility/privateData.js";

export default function forwardEventsTo(view) {
  privateData(this).forwardEventsTo = view;
  return this;
}
