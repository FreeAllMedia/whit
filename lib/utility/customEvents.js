// Polyfill for creating CustomEvents on IE9/10/11
// Adapted from: https://github.com/d4tocchini/customevent-polyfill

try {
  const customEvent = new window.CustomEvent("test");
  customEvent.preventDefault();
  if (customEvent.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error("Could not prevent default");
  }
} catch (testError) {
  class CustomEvent {
    constructor(event, params) {
      params = params || {
        bubbles: false,
        cancustomEventlable: false,
        detail: undefined
      };

      const customEvent = document.createEvent("CustomEvent");

      customEvent.initCustomEvent(
        event,
        params.bubbles,
        params.cancustomEventlable,
        params.detail
      );

      const originalPreventDefault = customEvent.preventDefault;

      customEvent.preventDefault = function () {
        originalPreventDefault.call(this);
        try {
          Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return true;
            }
          });
        } catch (defaultPreventedError) {
          this.defaultPrevented = true;
        }
      };
      return customEvent;
    }
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}
